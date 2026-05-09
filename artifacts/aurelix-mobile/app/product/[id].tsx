import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { PRODUCTS } from "@/constants/products";
import type { IoniconsName } from "@/constants/products";
import { useColors } from "@/hooks/useColors";

export default function ProductDetailScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const product = PRODUCTS.find((p) => p.id === id);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(30)).current;

  const bottomInset = Platform.OS === "web" ? 34 : insets.bottom;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        tension: 80,
        friction: 10,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  if (!product) {
    return (
      <View style={[styles.notFound, { backgroundColor: colors.background }]}>
        <Ionicons
          name="alert-circle-outline"
          size={48}
          color={colors.mutedForeground}
        />
        <Text style={[styles.notFoundText, { color: colors.mutedForeground }]}>
          Product not found
        </Text>
        <Pressable onPress={() => router.back()}>
          <Text style={[styles.backLink, { color: colors.gold }]}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={[
        styles.content,
        { paddingBottom: bottomInset + 40 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View
        style={[
          styles.heroSection,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
            opacity: fadeAnim,
            transform: [{ translateY }],
          },
        ]}
      >
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: product.accentColor + "22" },
          ]}
        >
          <Ionicons
            name={product.icon}
            size={40}
            color={product.accentColor}
          />
        </View>

        <View
          style={[styles.accentBar, { backgroundColor: product.accentColor }]}
        />

        <View style={styles.productMeta}>
          <Text
            style={[styles.categoryText, { color: colors.mutedForeground }]}
          >
            {product.category.toUpperCase()}
          </Text>
          <View
            style={[
              styles.statusBadge,
              {
                backgroundColor:
                  product.status === "Beta" ||
                  product.status === "Early Access"
                    ? product.accentColor + "22"
                    : colors.secondary,
              },
            ]}
          >
            <Text
              style={[
                styles.statusText,
                {
                  color:
                    product.status === "Beta" ||
                    product.status === "Early Access"
                      ? product.accentColor
                      : colors.mutedForeground,
                },
              ]}
            >
              {product.status.toUpperCase()}
            </Text>
          </View>
        </View>

        <Text style={[styles.productName, { color: colors.foreground }]}>
          {product.name}
        </Text>
        <Text style={[styles.productTagline, { color: product.accentColor }]}>
          {product.tagline}
        </Text>
      </Animated.View>

      <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
        <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>
          OVERVIEW
        </Text>
        <Text style={[styles.description, { color: colors.foreground }]}>
          {product.description}
        </Text>
      </Animated.View>

      <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
        <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>
          CORE CAPABILITIES
        </Text>
        <View style={styles.featuresList}>
          {product.features.map((feature, index) => (
            <View
              key={index}
              style={[
                styles.featureItem,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                },
              ]}
            >
              <View
                style={[
                  styles.featureDot,
                  { backgroundColor: product.accentColor },
                ]}
              />
              <Text style={[styles.featureText, { color: colors.foreground }]}>
                {feature}
              </Text>
            </View>
          ))}
        </View>
      </Animated.View>

      <Animated.View style={{ opacity: fadeAnim }}>
        <Pressable
          testID="join-waitlist-product-btn"
          style={({ pressed }) => [
            styles.ctaBtn,
            {
              backgroundColor: product.accentColor,
              opacity: pressed ? 0.85 : 1,
            },
          ]}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            router.push("/(tabs)/waitlist");
          }}
        >
          <Text style={[styles.ctaBtnText, { color: "#ffffff" }]}>
            Request Early Access
          </Text>
          <Ionicons name="arrow-forward" size={16} color="#ffffff" />
        </Pressable>

        <View
          style={[
            styles.infoBox,
            { backgroundColor: colors.card, borderColor: colors.border },
          ]}
        >
          <Ionicons
            name="information-circle-outline"
            size={16}
            color={colors.mutedForeground}
          />
          <Text style={[styles.infoText, { color: colors.mutedForeground }]}>
            AURELIX products are in active development. Join the waitlist to
            receive priority access when {product.name} launches.
          </Text>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 24,
  },
  notFound: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  notFoundText: { fontSize: 16, fontFamily: "Inter_400Regular" },
  backLink: {
    fontSize: 13,
    fontFamily: "Orbitron_600SemiBold",
    letterSpacing: 1,
  },
  heroSection: {
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
  },
  iconContainer: {
    width: 72,
    height: 72,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  accentBar: {
    width: 32,
    height: 2,
  },
  productMeta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryText: {
    fontSize: 9,
    fontFamily: "Orbitron_500Medium",
    letterSpacing: 2,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 9,
    fontFamily: "Orbitron_700Bold",
    letterSpacing: 0.5,
  },
  productName: {
    fontSize: 24,
    fontFamily: "Orbitron_900Black",
    letterSpacing: 1,
  },
  productTagline: {
    fontSize: 12,
    fontFamily: "Orbitron_500Medium",
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  section: { gap: 14 },
  sectionLabel: {
    fontSize: 10,
    fontFamily: "Orbitron_600SemiBold",
    letterSpacing: 3,
  },
  description: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    lineHeight: 24,
  },
  featuresList: { gap: 10 },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
  },
  featureDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    flexShrink: 0,
  },
  featureText: {
    fontSize: 13,
    fontFamily: "Orbitron_500Medium",
    letterSpacing: 0.3,
  },
  ctaBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 10,
    gap: 8,
    marginBottom: 12,
  },
  ctaBtnText: {
    fontSize: 13,
    fontFamily: "Orbitron_700Bold",
    letterSpacing: 1.5,
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
  },
  infoText: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    lineHeight: 18,
    flex: 1,
  },
});
