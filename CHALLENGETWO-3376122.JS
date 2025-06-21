class SearchSuggestionSystem {
    constructor(products) {
        // Sort products lexicographically once
        this.products = products.sort();
    }

    getSuggestions(searchWord) {
        let result = [];
        let prefix = '';

        for (let char of searchWord) {
            prefix += char;
            const suggestions = [];

            for (let product of this.products) {
                if (product.startsWith(prefix)) {
                    suggestions.push(product);
                    if (suggestions.length === 3) break; // Only up to 3 suggestions
                }
            }

            result.push(suggestions);
        }

        return result;
    }
}
