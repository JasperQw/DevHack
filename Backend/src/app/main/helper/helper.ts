export async function getUserData() {
  try {
    const req = await fetch("/api/get_user_data");
    const res = await req.json();
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
