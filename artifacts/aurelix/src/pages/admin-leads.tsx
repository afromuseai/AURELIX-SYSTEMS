import { useState, useEffect } from 'react'
import { Link } from 'wouter'
import { ArrowLeft, RefreshCw, Download, Lock } from 'lucide-react'

type Lead = {
  id: number
  email: string
  source: string
  createdAt: string
}

const SOURCE_LABELS: Record<string, string> = {
  contact: 'Main Waitlist',
  afromuse: 'AfroMuse',
  gtpro: 'GTPro',
}

const SOURCE_COLORS: Record<string, string> = {
  contact: 'text-gold bg-gold/10 border-gold/20',
  afromuse: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  gtpro: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
}

function TokenGate({ onUnlock }: { onUnlock: (token: string) => void }) {
  const [token, setToken] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!token.trim()) {
      setError(true)
      return
    }
    onUnlock(token.trim())
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-sm p-8 glass-card-gold rounded-lg text-center">
        <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gold/10 text-gold flex items-center justify-center">
          <Lock size={24} />
        </div>
        <h1 className="font-display text-xl tracking-wider text-gold-gradient mb-2">Admin Access</h1>
        <p className="text-sm text-muted-foreground mb-8">Enter your admin token to view leads.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={token}
            onChange={(e) => { setToken(e.target.value); setError(false) }}
            placeholder="Admin token"
            autoFocus
            className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors"
          />
          {error && <p className="text-xs text-red-400">Please enter a token.</p>}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gold text-background font-medium rounded-sm hover:bg-gold-light transition-all"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  )
}

export default function AdminLeadsPage() {
  const [adminToken, setAdminToken] = useState<string | null>(() =>
    sessionStorage.getItem('admin_token')
  )
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchLeads = async (token: string) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/leads`, {
        headers: { 'x-admin-token': token },
      })
      if (res.status === 401) {
        setAdminToken(null)
        sessionStorage.removeItem('admin_token')
        setError('Invalid token. Please try again.')
        return
      }
      if (!res.ok) throw new Error('Failed to load')
      const data = await res.json()
      setLeads(data)
    } catch {
      setError('Failed to load leads. Make sure the API server is running.')
    } finally {
      setLoading(false)
    }
  }

  const handleUnlock = (token: string) => {
    sessionStorage.setItem('admin_token', token)
    setAdminToken(token)
  }

  useEffect(() => {
    if (adminToken) fetchLeads(adminToken)
  }, [adminToken])

  if (!adminToken) {
    return <TokenGate onUnlock={handleUnlock} />
  }

  const downloadCsv = () => {
    const header = 'ID,Email,Source,Submitted At\n'
    const rows = leads.map(l =>
      `${l.id},"${l.email}","${SOURCE_LABELS[l.source] ?? l.source}","${new Date(l.createdAt).toLocaleString()}"`
    ).join('\n')
    const blob = new Blob([header + rows], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `aurelix-leads-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const counts = leads.reduce<Record<string, number>>((acc, l) => {
    acc[l.source] = (acc[l.source] ?? 0) + 1
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-gold/10 bg-background/80 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm">
              <ArrowLeft size={16} />
              Back
            </Link>
            <h1 className="font-display text-xl tracking-wider text-gold-gradient">Leads Admin</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchLeads(adminToken)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-sm hover:border-gold/30 transition-all"
            >
              <RefreshCw size={14} />
              Refresh
            </button>
            <button
              onClick={downloadCsv}
              disabled={leads.length === 0}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gold/10 text-gold border border-gold/20 rounded-sm hover:bg-gold/20 disabled:opacity-40 transition-all"
            >
              <Download size={14} />
              Export CSV
            </button>
            <button
              onClick={() => { sessionStorage.removeItem('admin_token'); setAdminToken(null) }}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-red-400 border border-border rounded-sm transition-all"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-3 gap-4 mb-10">
          {(['contact', 'afromuse', 'gtpro'] as const).map(source => (
            <div key={source} className="p-5 glass-card rounded-lg text-center">
              <p className={`text-xs font-medium tracking-widest border inline-block px-3 py-1 rounded-full ${SOURCE_COLORS[source]}`}>
                {SOURCE_LABELS[source].toUpperCase()}
              </p>
              <p className="font-display text-3xl text-foreground mt-4">{counts[source] ?? 0}</p>
            </div>
          ))}
        </div>

        {loading && (
          <p className="text-center text-muted-foreground py-20">Loading leads...</p>
        )}

        {error && (
          <p className="text-center text-red-400 py-20">{error}</p>
        )}

        {!loading && !error && leads.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No leads yet. Share the site and submissions will appear here.</p>
        )}

        {!loading && !error && leads.length > 0 && (
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="px-4 py-3 text-left text-xs text-muted-foreground tracking-wider font-medium">#</th>
                  <th className="px-4 py-3 text-left text-xs text-muted-foreground tracking-wider font-medium">Email</th>
                  <th className="px-4 py-3 text-left text-xs text-muted-foreground tracking-wider font-medium">Source</th>
                  <th className="px-4 py-3 text-left text-xs text-muted-foreground tracking-wider font-medium">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, i) => (
                  <tr
                    key={lead.id}
                    className={`border-b border-border/50 hover:bg-secondary/20 transition-colors ${i % 2 === 0 ? '' : 'bg-secondary/10'}`}
                  >
                    <td className="px-4 py-3 text-muted-foreground">{lead.id}</td>
                    <td className="px-4 py-3 text-foreground">{lead.email}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs border px-2 py-0.5 rounded-full ${SOURCE_COLORS[lead.source] ?? 'text-foreground border-border'}`}>
                        {SOURCE_LABELS[lead.source] ?? lead.source}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {new Date(lead.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}
