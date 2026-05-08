import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import type { IoniconsName } from "@/constants/products";
import { useColors } from "@/hooks/useColors";

type LeadSource = "contact" | "afromuse" | "gtpro";

const PRODUCT_OPTIONS: {
  id: LeadSource;
  label: string;
  icon: IoniconsName;
  description: string;
}[] = [
  {
    id: "afromuse",
    label: "AfroMuse AI",
    icon: "musical-notes",
    description: "AI-powered music creation",
  },
  {
    id: "gtpro",
    label: "GTPro",
    icon: "trending-up",
    description: "Global trade intelligence",
  },
  {
    id: "contact",
    label: "All Products",
    icon: "sparkles",
    description: "Keep me informed on everything",
  },
];

function ProductOption({
  option,
  selected,
  onSelect,
}: {
  option: (typeof PRODUCT_OPTIONS)[0];
  selected: boolean;
  onSelect: () => void;
}) {
  const colors = useColors();
  return (
    <Pressable
      testID={`source-option-${option.id}`}
      onPress={onSelect}
      style={[
        styles.productOption,
        {
          backgroundColor: selected ? colors.gold + "22" : colors.card,
          borderColor: selected ? colors.gold : colors.border,
        },
      ]}
    >
      <Ionicons
        name={option.icon}
        size={18}
        color={selected ? colors.gold : colors.mutedForeground}
      />
      <View style={{ flex: 1 }}>
        <Text
          style={[
            styles.productOptionLabel,
            { color: selected ? colors.gold : colors.foreground },
          ]}
        >
          {option.label}
        </Text>
        <Text
          style={[styles.productOptionDesc, { color: colors.mutedForeground }]}
        >
          {option.description}
        </Text>
      </View>
      <View
        style={[
          styles.radioOuter,
          { borderColor: selected ? colors.gold : colors.border },
        ]}
      >
        {selected && (
          <View
            style={[styles.radioInner, { backgroundColor: colors.gold }]}
          />
        )}
      </View>
    </Pressable>
  );
}

export default function WaitlistScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topInset = Platform.OS === "web" ? 67 : insets.top;
  const bottomInset = Platform.OS === "web" ? 34 : 0;

  const [email, setEmail] = useState("");
  const [source, setSource] = useState<LeadSource>("contact");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validate = () => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      return;
    }

    setLoading(true);
    try {
      const domain = process.env.EXPO_PUBLIC_DOMAIN;
      const baseUrl = domain ? `https://${domain}` : "";
      const response = await fetch(`${baseUrl}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase(), source }),
      });

      if (response.ok || response.status === 201) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || "Submission failed");
      }
    } catch (err: unknown) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      const message =
        err instanceof Error ? err.message : "Please try again later.";
      Alert.alert("Something went wrong", message, [{ text: "OK" }]);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <View
        style={[
          styles.successContainer,
          {
            backgroundColor: colors.background,
            paddingTop: topInset + 40,
            paddingBottom: bottomInset + 40,
          },
        ]}
      >
        <View
          style={[
            styles.successIcon,
            { backgroundColor: colors.gold + "22", borderColor: colors.gold },
          ]}
        >
          <Ionicons name="checkmark" size={40} color={colors.gold} />
        </View>
        <Text style={[styles.successTitle, { color: colors.foreground }]}>
          You're on the list
        </Text>
        <Text
          style={[styles.successSubtitle, { color: colors.mutedForeground }]}
        >
          We'll be in touch when we're ready for you. Intelligence evolves — and
          so will AURELIX.
        </Text>
        <Pressable
          style={[styles.resetBtn, { borderColor: colors.border }]}
          onPress={() => {
            setSubmitted(false);
            setEmail("");
            setSource("contact");
          }}
        >
          <Text style={[styles.resetBtnText, { color: colors.mutedForeground }]}>
            Submit another
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={[
        styles.content,
        { paddingTop: topInset + 24, paddingBottom: bottomInset + 40 },
      ]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={[styles.headerLabel, { color: colors.mutedForeground }]}>
          EARLY ACCESS
        </Text>
        <Text style={[styles.headerTitle, { color: colors.foreground }]}>
          Join the{"\n"}Waitlist
        </Text>
        <View style={[styles.headerLine, { backgroundColor: colors.gold }]} />
        <Text style={[styles.headerDesc, { color: colors.mutedForeground }]}>
          Be among the first to experience AURELIX. Select the product you're
          most interested in.
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.fieldGroup}>
          <Text style={[styles.label, { color: colors.foreground }]}>
            Email Address
          </Text>
          <TextInput
            testID="email-input"
            style={[
              styles.input,
              {
                backgroundColor: colors.input,
                color: colors.foreground,
                borderColor: emailError ? colors.destructive : colors.border,
                fontFamily: "Inter_400Regular",
              },
            ]}
            placeholder="your@email.com"
            placeholderTextColor={colors.mutedForeground}
            value={email}
            onChangeText={(v) => {
              setEmail(v);
              if (emailError) setEmailError("");
            }}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {emailError ? (
            <Text style={[styles.errorText, { color: colors.destructive }]}>
              {emailError}
            </Text>
          ) : null}
        </View>

        <View style={styles.fieldGroup}>
          <Text style={[styles.label, { color: colors.foreground }]}>
            I'm interested in
          </Text>
          <View style={styles.productOptions}>
            {PRODUCT_OPTIONS.map((opt) => (
              <ProductOption
                key={opt.id}
                option={opt}
                selected={source === opt.id}
                onSelect={() => setSource(opt.id)}
              />
            ))}
          </View>
        </View>

        <Pressable
          testID="submit-waitlist-btn"
          style={({ pressed }) => [
            styles.submitBtn,
            {
              backgroundColor: loading ? colors.goldMuted : colors.gold,
              opacity: pressed ? 0.85 : 1,
            },
          ]}
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color={colors.background} size="small" />
          ) : (
            <>
              <Text
                style={[styles.submitBtnText, { color: colors.background }]}
              >
                Request Access
              </Text>
              <Ionicons
                name="arrow-forward"
                size={16}
                color={colors.background}
              />
            </>
          )}
        </Pressable>

        <Text style={[styles.disclaimer, { color: colors.mutedForeground }]}>
          No spam. No noise. Just intelligence — when it's ready.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    paddingHorizontal: 24,
    gap: 28,
  },
  successContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    gap: 20,
  },
  successIcon: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  successTitle: {
    fontSize: 22,
    fontFamily: "Orbitron_800ExtraBold",
    letterSpacing: 2,
    textAlign: "center",
  },
  successSubtitle: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    lineHeight: 22,
    textAlign: "center",
  },
  resetBtn: {
    marginTop: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  resetBtnText: {
    fontSize: 12,
    fontFamily: "Orbitron_500Medium",
    letterSpacing: 1,
  },
  header: { gap: 10 },
  headerLabel: {
    fontSize: 10,
    fontFamily: "Orbitron_600SemiBold",
    letterSpacing: 4,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: "Orbitron_800ExtraBold",
    letterSpacing: 2,
    lineHeight: 38,
  },
  headerLine: {
    width: 32,
    height: 2,
    marginTop: 4,
  },
  headerDesc: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    lineHeight: 22,
    marginTop: 4,
  },
  form: { gap: 20 },
  fieldGroup: { gap: 8 },
  label: {
    fontSize: 11,
    fontFamily: "Orbitron_600SemiBold",
    letterSpacing: 1.5,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 15,
  },
  errorText: {
    fontSize: 12,
    fontFamily: "Inter_500Medium",
  },
  productOptions: { gap: 10 },
  productOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
  },
  productOptionLabel: {
    fontSize: 13,
    fontFamily: "Orbitron_600SemiBold",
    letterSpacing: 0.5,
  },
  productOptionDesc: {
    fontSize: 11,
    fontFamily: "Inter_400Regular",
    marginTop: 2,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  submitBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 8,
    gap: 8,
    marginTop: 4,
  },
  submitBtnText: {
    fontSize: 13,
    fontFamily: "Orbitron_700Bold",
    letterSpacing: 2,
  },
  disclaimer: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
    lineHeight: 18,
  },
});
