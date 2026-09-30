import { Link } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || pass.trim() === "") {
      const msg = "Please enter your name and password.";
      if (Platform.OS === "web") {
        alert(msg);
      } else {
        Alert.alert("Missing Information", msg);
      }
      return;
    }

    const successMsg = `Login Successful! Welcome, ${email}!`;
    if (Platform.OS === "web") {
      alert(successMsg); // Web-এর জন্য ব্রাউজার alert
    } else {
      Alert.alert("Login Successful", successMsg);
    }
    setMessage(successMsg); // স্ক্রিনেও মেসেজ দেখাবে
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>ExpoLearn</Text>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Learn. Build. Explore.</Text>
      </View>

      {/* Login Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sign in</Text>
        <Text style={styles.cardSubtitle}>Enter your details to continue</Text>

        {/* Name Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.icon}>👤</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your name"
            placeholderTextColor="#999"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.icon}>🔒</Text>
          <TextInput
            style={styles.input}
            value={pass}
            onChangeText={setPass}
            placeholder="Enter your password"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.showText}>
              {showPassword ? "Hide" : "Show"}
            </Text>
          </Pressable>
        </View>

        {/* Success Message Banner */}
        {message ? <Text style={styles.successBanner}>{message}</Text> : null}

        {/* Login Button */}
        <Pressable
          style={({ pressed }) => [
            styles.loginButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.loginText}>Login</Text>
        </Pressable>

        {/* Profile Link */}
        <Link href="/profile" style={styles.profileLink}>
          View My Profile →
        </Link>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>Expo React Native Learning Project</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 25,
  },
  logo: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FF1493",
    marginBottom: 12,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#222",
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 6,
  },
  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#888",
    marginTop: 5,
    marginBottom: 20,
  },
  inputContainer: {
    height: 55,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 14,
    backgroundColor: "#FAFAFA",
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#222",
  },
  showText: {
    color: "#FF1493",
    fontWeight: "600",
    fontSize: 13,
  },
  successBanner: {
    backgroundColor: "#E8F5E9",
    color: "#2E7D32",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    textAlign: "center",
    fontWeight: "600",
  },
  loginButton: {
    height: 52,
    backgroundColor: "#FF1493",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  profileLink: {
    textAlign: "center",
    marginTop: 18,
    color: "#FF1493",
    fontSize: 14,
    fontWeight: "600",
  },
  footer: {
    marginTop: 25,
    fontSize: 11,
    color: "#999",
  },
});