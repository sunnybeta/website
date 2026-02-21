package main

import "net/http"
import "html/template"
import "os"

func main() {
	templates := template.Must(template.ParseGlob("./templates/**/*.html"))
	files := []string{"index", "work", "posts", "projects", "about", "pricing", "contact"}
	for _, html := range files {
		file, _ := os.Create(html + ".html")
		templates.ExecuteTemplate(file, html, map[string]string{"Title": "Sunny Béta"})
		file.Close()
	}
	mux := http.NewServeMux()
	mux.HandleFunc("GET /", func(w http.ResponseWriter, r *http.Request) {
		templates.ExecuteTemplate(w, "index", map[string]string{"Title": "Sunny Béta"})
	})
	mux.HandleFunc("GET /work", func(w http.ResponseWriter, r *http.Request) {
		templates.ExecuteTemplate(w, "work", map[string]string{"Title": "Sunny Béta"})
	})
	mux.HandleFunc("GET /posts", func(w http.ResponseWriter, r *http.Request) {
		templates.ExecuteTemplate(w, "posts", map[string]string{"Title": "Sunny Béta"})
	})
	mux.HandleFunc("GET /projects", func(w http.ResponseWriter, r *http.Request) {
		templates.ExecuteTemplate(w, "projects", map[string]string{"Title": "Sunny Béta"})
	})
	mux.HandleFunc("GET /about", func(w http.ResponseWriter, r *http.Request) {
		templates.ExecuteTemplate(w, "about", map[string]string{"Title": "Sunny Béta"})
	})
	mux.HandleFunc("GET /pricing", func(w http.ResponseWriter, r *http.Request) {
		templates.ExecuteTemplate(w, "pricing", map[string]string{"Title": "Sunny Béta"})
	})
	mux.HandleFunc("GET /contact", func(w http.ResponseWriter, r *http.Request) {
		templates.ExecuteTemplate(w, "contact", map[string]string{"Title": "Sunny Béta"})
	})
}
