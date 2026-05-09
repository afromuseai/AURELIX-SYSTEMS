import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
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

import { PRODUCTS, Product, IoniconsName } from "@/constants/products";
import { useColors } from "@/hooks/useColors";

function ProductCard({ product }: { product: Product }) {
  const colors = useColors();
  const router = useRouter();
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.97,
      tension: 100,
      friction: 8,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      tension: 100,
      friction: 8,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        testID={`product-card-${product.id}`}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          router.push(`/product/${product.id}`);
        }}
        style={[
          styles.card,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
          },
        ]}
      >
        <View style={styles.cardHeader}>
          <View
            style={[
              styles.iconBadge,
              { backgroundColor: product.accentColor + "22" },
            ]}
          >
            <Ionicons
              name={product.icon}
              size={22}
              color={product.accentColor}
            />
          </View>
          <View style={styles.cardMeta}>
            <Text
              style={[styles.categoryLabel, { color: colors.mutedForeground }]}
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
        </View>

        <View
          style={[
            styles.accentLine,
            { backgroundColor: product.accentColor },
          ]}
        />

        <Text style={[styles.productName, { color: colors.foreground }]}>
          {product.name}
        </Text>
        <Text style={[styles.productTagline, { color: product.accentColor }]}>
          {product.tagline}
        </Text>
        <Text
          style={[styles.productDesc, { color: colors.mutedForeground }]}
          numberOfLines={2}
        >
          {product.description}
        </Text>

        <View style={styles.cardFooter}>
          <Text style={[styles.learnMore, { color: colors.gold }]}>
            Learn more
          </Text>
          <Ionicons name="arrow-forward" size={14} color={colors.gold} />
        </View>
      </Pressable>
    </Animated.View>
  );
}

export default function ProductsScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topInset = Platform.OS === "web" ? 67 : insets.top;
  const bottomInset = Platform.OS === "web" ? 34 : 0;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={[
        styles.content,
        { paddingTop: topInset + 24, paddingBottom: bottomInset + 40 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={[styles.headerLabel, { color: colors.mutedForeground }]}>
          PRODUCT ECOSYSTEM
        </Text>
        <Text style={[styles.headerTitle, { color: colors.foreground }]}>
          Intelligence{"\n"}Domains
        </Text>
        <View style={[styles.headerLine, { backgroundColor: colors.gold }]} />
      </View>

      <View style={styles.grid}>
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    paddingHorizontal: 20,
    gap: 20,
  },
  header: {
    gap: 8,
  },
  headerLabel: {
    fontSize: 10,
    fontFamily: "Orbitron_600SemiBold",
    letterSpacing: 3,
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
  grid: {
    gap: 14,
  },
  card: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    gap: 10,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardMeta: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryLabel: {
    fontSize: 9,
    fontFamily: "Orbitron_500Medium",
    letterSpacing: 1.5,
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
  accentLine: {
    height: 1,
    width: 24,
  },
  productName: {
    fontSize: 18,
    fontFamily: "Orbitron_800ExtraBold",
    letterSpacing: 1,
  },
  productTagline: {
    fontSize: 12,
    fontFamily: "Orbitron_500Medium",
    letterSpacing: 0.5,
  },
  productDesc: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },
  learnMore: {
    fontSize: 12,
    fontFamily: "Orbitron_600SemiBold",
    letterSpacing: 0.5,
  },
});
