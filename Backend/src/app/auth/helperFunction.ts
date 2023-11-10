import bcrypt from "bcrypt";

export async function hash(password: string) {
  try {
    const saltRounds = 10;
    const generatedSalt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, generatedSalt);
    return hash;
  } catch (err) {
    console.log(err);
  }
}

export async function compareHashes(password: string, hash: string) {
  try {
    return await bcrypt.compare(password, hash);
  } catch (err) {
    console.log(err);
  }
}
