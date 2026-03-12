import {FirebaseError} from "firebase/app";

function getAuthErrorMessage(error: unknown): string {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case "auth/user-not-found":
        return "No account found with this email.";
      case "auth/wrong-password":
        return "Incorrect email or password.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/user-disabled":
        return "This account has been disabled.";
      case "auth/too-many-requests":
        return "Too many attempts. Please try again later.";
      default:
        return "Unable to sign in. Please try again.";
    }
  }

  return "Something went wrong. Please try again.";
}

export { getAuthErrorMessage };