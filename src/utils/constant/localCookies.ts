export const getCookie = (name="access_token") => {
    const cookieString = document.cookie;
    const cookiesArray = cookieString.split("; ");
    const foundCookie = cookiesArray.find((row) => row.startsWith(`${name}=`));
    return foundCookie ? foundCookie.split("=")[1] : "";
}