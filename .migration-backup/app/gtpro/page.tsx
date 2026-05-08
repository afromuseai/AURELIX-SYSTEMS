"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ParticleField } from '@/components/animations/particle-field'
import { SectionReveal, StaggerContainer, StaggerItem, FadeIn } from '@/components/animations/section-reveal'
import { FloatingElement, HoverCard } from '@/components/animations/floating-elements'
import { 
  TrendingUp, Bot, BarChart3, LineChart, Zap, Shield,
  ArrowRight, ArrowLeft, ArrowUpRight, ArrowDownRight,
  Activity, Brain, Target, Gauge, Lock, Globe, 
  Cpu, Network, Send, ChevronRight
} from 'lucide-react'

// GTPro Navigation
function GTProNav() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-gold/10"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm">Back to AURELIX</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative w-32 h-10">
              <Image
                src="/images/logos/gtpro-logo.png"
                alt="GTPro"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xs text-emerald-400 px-2 py-0.5 bg-emerald-500/10 rounded">LIVE</span>
          </div>
          <Link 
            href="#access"
            className="px-4 py-2 text-sm bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-sm hover:bg-emerald-500/20 transition-all"
          >
            Request Access
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}

// Live Market Ticker
function MarketTicker() {
  const [prices, setPrices] = useState([
    { symbol: 'BTC/USD', price: 67842.50, change: 2.34 },
    { symbol: 'ETH/USD', price: 3421.80, change: 1.87 },
    { symbol: 'EUR/USD', price: 1.0856, change: -0.12 },
    { symbol: 'GOLD', price: 2334.60, change: 0.45 },
    { symbol: 'SPX', price: 5234.18, change: 0.89 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => prev.map(p => ({
        ...p,
        price: p.price * (1 + (Math.random() - 0.5) * 0.001),
        change: p.change + (Math.random() - 0.5) * 0.1
      })))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="border-y border-gold/10 bg-secondary/30 overflow-hidden">
      <motion.div 
        className="flex gap-8 py-3 px-6"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...prices, ...prices, ...prices].map((item, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap">
            <span className="text-sm text-foreground font-medium">{item.symbol}</span>
            <span className="text-sm text-muted-foreground font-mono">
              {item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className={`text-xs flex items-center gap-0.5 ${
              item.change >= 0 ? 'text-emerald-400' : 'text-red-400'
            }`}>
              {item.change >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
              {Math.abs(item.change).toFixed(2)}%
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// Hero Section
function GTProHero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-emerald-950/10" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <ParticleField particleCount={50} color="rgba(52, 211, 153" />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-6 py-32">
        <div className="max-w-6xl mx-auto text-center">
          <FloatingElement amplitude={10} duration={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-80 h-28 mx-auto mb-8"
            >
              <Image
                src="/images/logos/gtpro-logo.png"
                alt="GTPro - Global Trade Intelligence"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: '0 0 40px rgba(52, 211, 153, 0.15)' }} />
            </motion.div>
          </FloatingElement>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6">
              INSTITUTIONAL GRADE
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            AI-powered trading systems and autonomous bot fleets
            <br />
            <span className="text-emerald-400/80">executing real-time market strategies.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#access"
              className="group flex items-center gap-2 px-8 py-4 bg-emerald-500 text-background font-medium rounded-sm hover:bg-emerald-400 transition-all duration-300"
              style={{ boxShadow: '0 0 30px rgba(52, 211, 153, 0.2)' }}
            >
              <Zap size={18} />
              Request Access
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#features"
              className="flex items-center gap-2 px-8 py-4 text-foreground font-medium rounded-sm border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-500/5 transition-all"
            >
              View Platform
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { value: '$2.4B+', label: 'Volume Processed' },
              { value: '99.9%', label: 'Uptime' },
              { value: '<10ms', label: 'Execution Speed' },
              { value: '24/7', label: 'Market Coverage' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 glass-card rounded-lg">
                <div className="font-display text-xl sm:text-2xl text-emerald-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Market Ticker */}
      <MarketTicker />
    </section>
  )
}

// AI Trading Intelligence Section
function AITradingSection() {
  const features = [
    { icon: Brain, title: 'Neural Networks', desc: 'Deep learning models analyzing market patterns' },
    { icon: Activity, title: 'Real-time Analysis', desc: 'Millisecond-level market data processing' },
    { icon: Target, title: 'Precision Signals', desc: '95%+ accuracy on trade entry points' },
    { icon: Shield, title: 'Risk Management', desc: 'AI-powered position sizing and stops' },
  ]

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6">
              AI TRADING
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
              <span className="text-gold-gradient">Intelligent</span>
              <br />Trading Systems
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our AI processes millions of data points per second, identifying patterns 
              and executing strategies that human traders simply cannot match.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-secondary/30 rounded-lg"
                >
                  <feature.icon size={20} className="text-emerald-400 mb-2" />
                  <h4 className="text-sm font-medium text-foreground">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          <FadeIn delay={0.3}>
            <TradingChart />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// Trading Chart Component
function TradingChart() {
  const [data, setData] = useState<number[]>([])

  useEffect(() => {
    // Initialize with random data
    const initial = Array.from({ length: 50 }, () => 50 + Math.random() * 30)
    setData(initial)

    const interval = setInterval(() => {
      setData(prev => {
        const last = prev[prev.length - 1]
        const newValue = Math.max(20, Math.min(90, last + (Math.random() - 0.5) * 5))
        return [...prev.slice(1), newValue]
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-6 glass-card rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg text-foreground font-medium">BTC/USD</h3>
          <p className="text-sm text-muted-foreground">Live Trading View</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-400">LIVE</span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-48 flex items-end gap-0.5 mb-4">
        {data.map((value, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-sm"
            initial={{ height: 0 }}
            animate={{ height: `${value}%` }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4 pt-4 border-t border-border/50">
        <div>
          <p className="text-xs text-muted-foreground">Price</p>
          <p className="text-sm text-foreground font-mono">$67,842.50</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">24h Change</p>
          <p className="text-sm text-emerald-400 font-mono">+2.34%</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Volume</p>
          <p className="text-sm text-foreground font-mono">$42.8B</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">AI Signal</p>
          <p className="text-sm text-emerald-400">BUY</p>
        </div>
      </div>
    </div>
  )
}

// Autonomous Bot Fleets Section
function BotFleetsSection() {
  const bots = [
    { name: 'Momentum Alpha', type: 'Trend Following', status: 'active', pnl: '+12.4%', trades: 847 },
    { name: 'Mean Reversion', type: 'Statistical Arbitrage', status: 'active', pnl: '+8.7%', trades: 1243 },
    { name: 'Scalper Pro', type: 'High Frequency', status: 'active', pnl: '+15.2%', trades: 12847 },
    { name: 'Volatility Hunter', type: 'Options Strategy', status: 'paused', pnl: '+6.1%', trades: 234 },
  ]

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6">
            BOT FLEETS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
            Autonomous <span className="text-gold-gradient">Trading Bots</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deploy intelligent trading bots that work 24/7, executing your strategies with precision.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bots.map((bot, i) => (
            <FadeIn key={bot.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(52, 211, 153, 0.3)' }}
                className="p-6 glass-card rounded-lg transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <Bot size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{bot.name}</h3>
                      <p className="text-xs text-muted-foreground">{bot.type}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    bot.status === 'active' 
                      ? 'bg-emerald-500/10 text-emerald-400' 
                      : 'bg-yellow-500/10 text-yellow-400'
                  }`}>
                    {bot.status === 'active' ? 'Active' : 'Paused'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">30d P&L</p>
                    <p className="text-lg font-mono text-emerald-400">{bot.pnl}</p>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Total Trades</p>
                    <p className="text-lg font-mono text-foreground">{bot.trades.toLocaleString()}</p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// Strategy Execution Section
function StrategySection() {
  const strategies = [
    { name: 'Trend Following', allocation: 35, performance: '+18.4%' },
    { name: 'Mean Reversion', allocation: 25, performance: '+12.1%' },
    { name: 'Momentum', allocation: 20, performance: '+15.7%' },
    { name: 'Arbitrage', allocation: 20, performance: '+9.3%' },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="p-8 glass-card rounded-lg">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg text-foreground font-medium">Strategy Allocation</h3>
                  <p className="text-sm text-muted-foreground">Active Portfolio Mix</p>
                </div>
                <BarChart3 className="text-emerald-400" size={24} />
              </div>

              <div className="space-y-4">
                {strategies.map((strategy, i) => (
                  <motion.div
                    key={strategy.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-foreground">{strategy.name}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-muted-foreground">{strategy.allocation}%</span>
                        <span className="text-xs text-emerald-400">{strategy.performance}</span>
                      </div>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${strategy.allocation}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Total Portfolio Value</p>
                  <p className="text-xl font-mono text-foreground">$2,847,392.50</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Overall Performance</p>
                  <p className="text-xl font-mono text-emerald-400">+14.8%</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <SectionReveal direction="left">
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6">
              LIVE EXECUTION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
              <span className="text-gold-gradient">Strategy</span>
              <br />Execution Engine
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Execute complex trading strategies across multiple markets simultaneously.
              Our engine handles everything from order routing to position management.
            </p>

            <ul className="space-y-4">
              {[
                'Multi-asset execution across forex, crypto, and equities',
                'Smart order routing for best execution',
                'Real-time position monitoring and rebalancing',
                'Automated risk controls and circuit breakers'
              ].map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <ChevronRight size={12} className="text-emerald-400" />
                  </div>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

// Market Analytics Section
function AnalyticsSection() {
  const metrics = [
    { icon: LineChart, title: 'Technical Analysis', desc: 'AI-powered chart pattern recognition' },
    { icon: Activity, title: 'Sentiment Analysis', desc: 'Social and news sentiment tracking' },
    { icon: Gauge, title: 'Risk Metrics', desc: 'Real-time VaR and exposure analysis' },
    { icon: Globe, title: 'Market Coverage', desc: 'Global markets, 24/7 monitoring' },
  ]

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6">
            ANALYTICS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
            Market <span className="text-gold-gradient">Intelligence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive analytics powered by machine learning and real-time data processing.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <StaggerItem key={metric.title}>
              <HoverCard>
                <div className="p-6 glass-card rounded-lg text-center h-full">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <metric.icon size={24} />
                  </div>
                  <h3 className="font-display tracking-wider text-foreground mb-2">{metric.title}</h3>
                  <p className="text-sm text-muted-foreground">{metric.desc}</p>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

// Predictive Systems Section
function PredictiveSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6">
              PREDICTIVE AI
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
              <span className="text-gold-gradient">Predictive</span>
              <br />Intelligence Systems
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our AI models analyze historical patterns, market microstructure, and 
              alternative data to generate predictive signals with institutional-grade accuracy.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Signal Accuracy', value: '94.7%' },
                { label: 'Avg. Hold Time', value: '4.2hrs' },
                { label: 'Win Rate', value: '67.3%' },
                { label: 'Profit Factor', value: '2.84' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-secondary/30 rounded-lg"
                >
                  <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-mono text-emerald-400">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          <FadeIn delay={0.3}>
            <div className="p-8 glass-card rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="text-emerald-400" size={24} />
                <span className="font-display tracking-wider text-foreground">AI Prediction Engine</span>
              </div>
              
              <div className="space-y-4">
                {[
                  { asset: 'BTC/USD', prediction: 'Bullish', confidence: 87, timeframe: '4H' },
                  { asset: 'ETH/USD', prediction: 'Neutral', confidence: 62, timeframe: '4H' },
                  { asset: 'EUR/USD', prediction: 'Bearish', confidence: 78, timeframe: '1D' },
                ].map((pred, i) => (
                  <motion.div
                    key={pred.asset}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg"
                  >
                    <div>
                      <p className="text-sm text-foreground font-medium">{pred.asset}</p>
                      <p className="text-xs text-muted-foreground">{pred.timeframe} timeframe</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-medium ${
                        pred.prediction === 'Bullish' ? 'text-emerald-400' :
                        pred.prediction === 'Bearish' ? 'text-red-400' : 'text-yellow-400'
                      }`}>
                        {pred.prediction}
                      </p>
                      <p className="text-xs text-muted-foreground">{pred.confidence}% confidence</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// Dashboard Preview Section
function DashboardSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6">
            DASHBOARD
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
            Trading <span className="text-gold-gradient">Command Center</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Monitor your entire portfolio, manage bots, and execute strategies from one powerful interface.
          </p>
        </SectionReveal>

        <FadeIn>
          <div className="space-y-8">
            {/* Main Dashboard Screenshot */}
            <div className="relative rounded-xl overflow-hidden border border-emerald-500/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rTFMPwxU2jlFFk6LpzJr5fLimltybw.png"
                alt="GTPro Dashboard"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>

            {/* Additional Screenshots Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative rounded-xl overflow-hidden border border-emerald-500/20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8TbHWhRHDiP13JUwmruNDYKx8wb0ij.png"
                  alt="GTPro AI Signal Engine"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden border border-emerald-500/20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aCH2d2oJV2erIwqgRcktaxuWzjFGMH.png"
                  alt="GTPro Fleet Management"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// Access Request Section
function AccessSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <section id="access" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/10 to-transparent" />
      
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <SectionReveal>
          <FloatingElement amplitude={8} duration={6}>
            <div className="inline-flex items-center justify-center w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-600/20 border border-emerald-500/30">
              <Lock size={36} className="text-emerald-400" />
            </div>
          </FloatingElement>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
            Request <span className="text-gold-gradient">Access</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            GTPro is currently available to qualified institutional traders.
            <br />Request access to join our platform.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 glass-card rounded-lg border border-emerald-500/30"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Zap size={24} className="text-emerald-400" />
              </div>
              <h3 className="font-display text-xl text-emerald-400 mb-2">Request Submitted</h3>
              <p className="text-muted-foreground">Our team will review your application and contact you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your institutional email"
                required
                className="flex-1 px-4 py-3 bg-secondary/50 border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-emerald-500 text-background font-medium rounded-sm hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Request
              </motion.button>
            </form>
          )}

          <p className="mt-8 text-xs text-muted-foreground">
            Institutional verification required. Minimum account size: $100,000
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}

// Footer
function GTProFooter() {
  return (
    <footer className="border-t border-emerald-500/10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8525df2b-d72c-4406-a831-154b96314b47-rb1k9QauZuEx5NAYJmD29t9zL68lDm.png"
            alt="GTPro"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="font-display text-gold-gradient">GTPro</span>
          <span className="text-muted-foreground text-sm">by AURELIX SYSTEMS</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} AURELIX SYSTEMS. All rights reserved. Trading involves risk.
        </p>
      </div>
    </footer>
  )
}

// Main Page
export default function GTProPage() {
  return (
    <main className="relative">
      <GTProNav />
      <GTProHero />
      <AITradingSection />
      <BotFleetsSection />
      <StrategySection />
      <AnalyticsSection />
      <PredictiveSection />
      <DashboardSection />
      <AccessSection />
      <GTProFooter />
    </main>
  )
}
