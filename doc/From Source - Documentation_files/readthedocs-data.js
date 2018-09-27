var READTHEDOCS_DATA = {
    "project": "licode", 
    "theme": "readthedocs", 
    "version": "stable", 
    "source_suffix": ".md", 
    "api_host": "https://readthedocs.org", 
    "language": "en", 
    "commit": "76e3d39115b21c896aee4b7dee5d4a2bc5dd7647", 
    "docroot": "doc", 
    "builder": "mkdocs", 
    "page": null
}

// Old variables
var doc_version = "stable";
var doc_slug = "licode";
var page_name = "None";
var html_theme = "readthedocs";

READTHEDOCS_DATA["page"] = mkdocs_page_input_path.substr(
    0, mkdocs_page_input_path.lastIndexOf(READTHEDOCS_DATA.source_suffix));
