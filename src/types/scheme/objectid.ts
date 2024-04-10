import { ObjectIdRegex } from "@/lib/constants";
import { z } from "zod";

const ObjectIdScheme = z
	.string()
	.regex(ObjectIdRegex, {
		message: "El Id debe ser un hex valido.",
	})
	.optional();

export default ObjectIdScheme;
