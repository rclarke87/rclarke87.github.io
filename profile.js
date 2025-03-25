function updateUserProfile(userProfile) {
  // Basic Profile Information
  document.getElementById(
    "userFullName"
  ).textContent = `${userProfile.personalInfo.firstName} ${userProfile.personalInfo.lastName}`;
  document.getElementById("profilePicture").src =
    userProfile.personalInfo.profileImg;
  document.getElementById("subscriptionTier").textContent =
    userProfile.accountDetails.subscriptionTier;
  document.getElementById("userCountry").textContent =
    userProfile.personalInfo.country;

  // Additional User Details
  document.getElementById("userEmail").textContent =
    userProfile.personalInfo.email;
  document.getElementById("dateOfBirth").textContent =
    userProfile.personalInfo.dateOfBirth;

  // Account Details
  document.getElementById("username").textContent =
    userProfile.accountDetails.username;
  document.getElementById("accountType").textContent =
    userProfile.accountDetails.accountType;
  document.getElementById("accountCreated").textContent = new Date(
    userProfile.accountDetails.accountCreated
  ).toLocaleDateString();
  document.getElementById("lastLogin").textContent = new Date(
    userProfile.accountDetails.lastLogin
  ).toLocaleString();

  // Account Status Indicators
  document.getElementById("isVerified").textContent = userProfile.accountDetails
    .isVerified
    ? "Verified"
    : "Not Verified";
  document.getElementById("subscriptionStatus").textContent =
    userProfile.accountDetails.subscriptionStatus;

  // User Preferences
  document.getElementById("language").textContent =
    userProfile.preferences.language;
  document.getElementById("theme").textContent = userProfile.preferences.theme;

  // User Stats
  document.getElementById("userLevel").textContent =
    userProfile.stats.userLevel;
  document.getElementById("userXP").textContent = userProfile.stats.xp;
  document.getElementById("followersCount").textContent =
    userProfile.stats.followersCount;
}

const userProfile = {
  id: "usr_1",
  personalInfo: {
    firstName: "Rutger",
    lastName: "Clarke",
    profileImg: "images/roundedprofile.png",
    email: "rutger.clarke@ridefixr.com",
    dateOfBirth: "1988-01-15",
    country: "Leeds, United Kingdom",
  },
  accountDetails: {
    username: "javascript4lyfe",
    accountType: "Developer",
    accountCreated: "2022-03-10T14:30:45Z",
    lastLogin: "2025-03-23T09:15:22Z",
    isVerified: true,
    subscriptionStatus: "active",
    subscriptionTier: "Lifetime Member",
    lifetimeMember: true,
    admin: true,
  },
  preferences: {
    language: "English",
    theme: "Dark",
    notifications: {
      email: true,
      push: true,
    },
  },
  stats: {
    userLevel: 12,
    xp: 6500,
    postsCount: 0,
    followersCount: 665,
    followingCount: 0,
  },
};

// Follow button functionality
document.getElementById("followButton").addEventListener("click", () => {
  // Increment followers count in the userProfile object
  userProfile.stats.followersCount++;

  // Update the display
  document.getElementById("followersCount").textContent =
    userProfile.stats.followersCount;

  // Disable the button after following
  const followButton = document.getElementById("followButton");
  followButton.disabled = true;
  followButton.textContent = "Following";
  followButton.classList.replace("btn-primary", "btn-secondary");
});

// Call the update function
updateUserProfile(userProfile);
