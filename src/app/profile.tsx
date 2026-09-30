import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>

      {/* Profile Header */}
      <View style={styles.profileHeader}>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>S</Text>
        </View>

        <Text style={styles.name}>
          Shakil
        </Text>

        <Text style={styles.role}>
          Expo React Native Learner
        </Text>

      </View>

      {/* Information Cards */}
      <View style={styles.card}>

        <Text style={styles.cardIcon}>📱</Text>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>
            Application
          </Text>

          <Text style={styles.cardValue}>
            ExpoLearn
          </Text>
        </View>

      </View>

      <View style={styles.card}>

        <Text style={styles.cardIcon}>🎓</Text>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>
            Learning Level
          </Text>

          <Text style={styles.cardValue}>
            Basic React Native
          </Text>
        </View>

      </View>

      <View style={styles.card}>

        <Text style={styles.cardIcon}>🚀</Text>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>
            Project Status
          </Text>

          <Text style={styles.cardValue}>
            Learning & Building
          </Text>
        </View>

      </View>

      {/* Back Button */}
      <Link href="/" asChild>
        <Pressable
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.backButtonText}>
            ← Back to Home
          </Text>
        </Pressable>
      </Link>

      {/* Footer */}
      <Text style={styles.footer}>
        ExpoLearn • Learning Project
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 50,
  },

  profileHeader: {
    alignItems: "center",
    marginBottom: 30,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#FF1493",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,

    elevation: 5,
  },

  avatarText: {
    fontSize: 38,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  name: {
    fontSize: 26,
    fontWeight: "800",
    color: "#222",
  },

  role: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },

  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,

    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,

    elevation: 3,
  },

  cardIcon: {
    fontSize: 26,
    marginRight: 15,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 12,
    color: "#999",
    marginBottom: 3,
  },

  cardValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },

  backButton: {
    width: "100%",
    maxWidth: 420,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#FF1493",

    alignItems: "center",
    justifyContent: "center",

    marginTop: 12,
  },

  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },

  backButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  footer: {
    marginTop: 20,
    fontSize: 11,
    color: "#999",
  },
});