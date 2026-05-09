import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const { width } = Dimensions.get("window");

const BELIEFS = [
  "Intelligence should scale with human ambition.",
  "Systems should adapt, not break under pressure.",
  "Automation should empower, not replace.",
  "Innovation must remain human-centered.",
];

function BeliefCard({ text, delay }: { text: string; delay: number }) {
  const colors = useColors();
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 600,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 600,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.beliefCard,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      <View style={[styles.beliefDot, { backgroundColor: colors.gold }]} />
      <Text style={[styles.beliefText, { color: colors.mutedForeground }]}>
        {text}
      </Text>
    </Animated.View>
  );
}

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const logoScale = useRef(new Animated.Value(0.8)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const glowAnim = useRef(new Animated.Value(0)).current;

  const topInset = Platform.OS === "web" ? 67 : insets.top;
  const bottomInset = Platform.OS === "web" ? 34 : 0;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(logoScale, {
          toValue: 1,
          tension: 60,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(titleOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const glowOpacity = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.8],
  });

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={[
        styles.content,
        { paddingTop: topInset + 24, paddingBottom: bottomInset + 40 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View
        style={[
          styles.heroSection,
          { opacity: logoOpacity, transform: [{ scale: logoScale }] },
        ]}
      >
        <Animated.View
          style={[
            styles.glowRing,
            { borderColor: colors.gold, opacity: glowOpacity },
          ]}
        />
        <View
          style={[
            styles.logoCircle,
            { backgroundColor: colors.card, borderColor: colors.border },
          ]}
        >
          <Text style={[styles.logoText, { color: colors.gold }]}>AX</Text>
        </View>
      </Animated.View>

      <Animated.View style={{ opacity: titleOpacity, alignItems: "center" }}>
        <Text style={[styles.brandName, { color: colors.foreground }]}>
          AURELIX
        </Text>
        <Text style={[styles.brandSub, { color: colors.gold }]}>
          — SYSTEMS —
        </Text>
        <View style={[styles.divider, { backgroundColor: colors.gold }]} />
        <Text style={[styles.tagline, { color: colors.mutedForeground }]}>
          Intelligent systems that evolve,{"\n"}adapt, and scale with human
          ambition.
        </Text>
      </Animated.View>

      <View style={styles.ctaRow}>
        <Pressable
          testID="explore-products-btn"
          style={({ pressed }) => [
            styles.primaryBtn,
            { backgroundColor: colors.gold, opacity: pressed ? 0.8 : 1 },
          ]}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            router.push("/(tabs)/products");
          }}
        >
          <Text style={[styles.primaryBtnText, { color: colors.background }]}>
            Explore Products
          </Text>
          <Ionicons name="arrow-forward" size={16} color={colors.background} />
        </Pressable>

        <Pressable
          testID="join-waitlist-btn"
          style={({ pressed }) => [
            styles.secondaryBtn,
            {
              borderColor: colors.gold,
              opacity: pressed ? 0.7 : 1,
            },
          ]}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            router.push("/(tabs)/waitlist");
          }}
        >
          <Text style={[styles.secondaryBtnText, { color: colors.gold }]}>
            Join Waitlist
          </Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>
          OUR BELIEFS
        </Text>
        {BELIEFS.map((b, i) => (
          <BeliefCard key={i} text={b} delay={800 + i * 120} />
        ))}
      </View>

      <View
        style={[
          styles.labsBadge,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <Ionicons name="flask" size={14} color={colors.gold} />
        <Text style={[styles.labsText, { color: colors.mutedForeground }]}>
          AURELIX LABS — Research in autonomous AI, intelligence infrastructure
          & creative computation
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 32,
  },
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  glowRing: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
  },
  logoCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: 28,
    fontFamily: "Orbitron_800ExtraBold",
    letterSpacing: 4,
  },
  brandName: {
    fontSize: 38,
    fontFamily: "Orbitron_900Black",
    letterSpacing: 10,
    textAlign: "center",
  },
  brandSub: {
    fontSize: 13,
    fontFamily: "Orbitron_500Medium",
    letterSpacing: 6,
    marginTop: 6,
  },
  divider: {
    width: 40,
    height: 1,
    marginTop: 18,
    marginBottom: 16,
  },
  tagline: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    lineHeight: 24,
    textAlign: "center",
    maxWidth: 280,
  },
  ctaRow: {
    width: "100%",
    gap: 12,
  },
  primaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 8,
    gap: 8,
  },
  primaryBtnText: {
    fontSize: 13,
    fontFamily: "Orbitron_700Bold",
    letterSpacing: 2,
  },
  secondaryBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
  },
  secondaryBtnText: {
    fontSize: 13,
    fontFamily: "Orbitron_600SemiBold",
    letterSpacing: 2,
  },
  section: {
    width: "100%",
    gap: 10,
  },
  sectionLabel: {
    fontSize: 10,
    fontFamily: "Orbitron_600SemiBold",
    letterSpacing: 4,
    marginBottom: 4,
  },
  beliefCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
  },
  beliefDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 5,
    flexShrink: 0,
  },
  beliefText: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
    flex: 1,
  },
  labsBadge: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    width: "100%",
  },
  labsText: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    lineHeight: 18,
    flex: 1,
  },
});
