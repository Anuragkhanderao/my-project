class User {
    constructor(fullName, email, password, profilePicture, projectImages, resume) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
        this.projectImages = projectImages;
        this.resume = resume;
    }
}

module.exports = User;
