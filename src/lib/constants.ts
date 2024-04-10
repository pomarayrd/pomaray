/* 
    # Regex 
*/
export const injectionRegex = /^[A-Za-z0-9.,_@#]+$/;
export const ObjectIdRegex = /\b[0-9a-fA-F]{24}\b/g;

/*  
	# Char's
*/
export const stringReplaceCharacter = "%s";
export const numberReplaceCharacter = "%d";
export const valueReplaceCharacter = "%v";

/* 
	# Enums
*/
export const Role = {
	3: "Lector",
	2: "Escritor",
	1: "Administrador",
	0: "Desarrollador",
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
	url: "http://127.0.0.1:8000/v1",
	getEndpoint(endpoint: string) {
		return `${this.url}${endpoint}`;
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
