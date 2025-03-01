const mongoose = require("mongoose");


// Administrateur
const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
const Admin = mongoose.model("Admin", adminSchema);

// Créateur de contenu
const createurSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    nbrvideos: { type: Number, required: true },
    nbrvues: { type: Number, required: true },
    nbrfollowers: { type: Number, required: true },
    revenu: { type: Number, required: true }
});
const Createur = mongoose.model("Createur", createurSchema);

// Consommateur
const consommateurSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    statut: { type: Boolean, default: false, required: true }
});
const Consommateur = mongoose.model("Consommateur", consommateurSchema);

// Communauté
const communauteSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    description: { type: String, required: true },
    dateCreation: { type: Date, default: Date.now },
    profil: { type: String, required: true }, // Stockage d'une URL d'image
    banner: { type: String, required: true }, // Stockage d'une URL d'image
    nbrAbonnes: { type: Number, required: true },
    nbrPost: { type: Number, required: true },
    idUCreateurDeContenu: { type: mongoose.Schema.Types.ObjectId, ref: "Createur", required: true }
});
const Communaute = mongoose.model("Communaute", communauteSchema);

// Peut adhérer à une communauté
const peutAdhererSchema = new mongoose.Schema({
    idConsommateur: { type: mongoose.Schema.Types.ObjectId, ref: "Consommateur", required: true },
    idCommunaute: { type: mongoose.Schema.Types.ObjectId, ref: "Communaute", required: true }
});
const PeutAdherer = mongoose.model("PeutAdherer", peutAdhererSchema);

// Stream
const streamSchema = new mongoose.Schema({
    dateDebut: { type: Date },
    dateFin: { type: Date },
    titre: { type: String, required: true },
    nbPersonnes: { type: Number, default: 0 },
    statut: { type: Number, default: 0 },
    idCreateur: { type: mongoose.Schema.Types.ObjectId, ref: "Createur", required: true }
});
const Stream = mongoose.model("Stream", streamSchema);

// Vidéo
const videoSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    description: { type: String, required: true },
    datePublication: { type: Date, default: Date.now },
    etat: { type: String, enum: ["brouillon", "publiée", "archivée"], default: "brouillon" },
    idCreateur: { type: mongoose.Schema.Types.ObjectId, ref: "Createur", required: true },
    idAdministrateur: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true }

});
const Video = mongoose.model("Video", videoSchema);

// Commentaire
const commentaireSchema = new mongoose.Schema({
    contenu: { type: String, required: true },
    datePublication: { type: Date, default: Date.now },
    idVideo: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
    idPost: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    idStream: { type: mongoose.Schema.Types.ObjectId, ref: "Stream" },
    idConsommateur: { type: mongoose.Schema.Types.ObjectId, ref: "Consommateur", required: true }
});
const Commentaire = mongoose.model("Commentaire", commentaireSchema);

// Post
const postSchema = new mongoose.Schema({
    description: { type: String, required: true },
    idUCreateurDeContenu: { type: mongoose.Schema.Types.ObjectId, ref: "Createur", required: true },
    idConsommateur: { type: mongoose.Schema.Types.ObjectId, ref: "Consommateur", required: true }

});
const Post = mongoose.model("Post", postSchema);

module.exports = { 
    Admin, 
    Createur, 
    Consommateur, 
    Communaute, 
    PeutAdherer, 
    Stream, 
    Video, 
    Commentaire, 
    Post 
};