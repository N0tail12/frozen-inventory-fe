export default function({ $axios, redirect }) {
  $axios.setHeader("Content-Type", "application/json");
  $axios.interceptors.request.use(config => {
    let token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  });
  $axios.interceptors.response.use(config => {
    if (config.data.statusCode == 404) {
      redirect("/not-found");
    }
    return config;
  });
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if ([403, 401].includes(code)) {
      localStorage.clear();
      redirect("/login");
    } else if (code === 400) {
      if (error.response.data.message ? false : error.response.data.includes("Basic authentication"))
        localStorage.setItem("invalidJiraAPIToken", "true");
    }
  });
}
