/* 
    # Regex 
*/
export const injectionRegex = /^[A-Za-z0-9.,_@#]+$/;
export const stringReplaceCharacter = "%s";
export const numberReplaceCharacter = "%d";
export const valueReplaceCharacter = "%v";

/* 
	# Enums
*/
export const Role = {
	READER: "Lector",
	WRITER: "Escritor",
	ADMIN: "Administrador",
	DEVELOPER: "Desarrollador",
};

export const Sex = {
	MALE: "Masculino",
	FEMALE: "Femenino",
};

export const NewsShortBy = {
	Views: "Visitas",
	Recents: "Recientes",
};

/* 
	# API
*/

export const API = {
	url: "https://pomaray-api.onrender.com/api",
	getEndpoint(endpoint: string) {
		return `${this.url}/${endpoint}`;
	},
};

export const CONNECTION_ERROR =
	"No se pudo establecer la conexión. Por favor, verifique si tiene conexión a internet.";

/* 
	# COOKIES KEYS
*/

export const cookiesKeys = {
	token: {
		key: "POMARAY_TOKEN",
		time: 60 * 60 * 24 * 7,
	},
};
