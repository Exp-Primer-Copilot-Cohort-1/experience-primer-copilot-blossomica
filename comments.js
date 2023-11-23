// Create web server
// Start server: node comments.js
// Test url: http://localhost:8080/comments
// Test url: http://localhost:8080/comments?limit=2&offset=1
// Test url: http://localhost:8080/comments?limit=2&offset=1&sort=desc
// Test url: http://localhost:8080/comments?limit=2&offset=1&sort=desc&filter=it
// Test url: http://localhost:8080/comments?limit=2&offset=1&sort=desc&filter=it&fields=id,author,comment

// Load modules
var http = require('http');
var url = require('url');
var qs = require('querystring');

// Create web server
var server = http.createServer(function (req, res) {
    // Get url and parse it
    var url_parts = url.parse(req.url, true);

    // Get query string as object
    var query = url_parts.query;

    // Get limit, offset and sort
    var limit = query.limit;
    var offset = query.offset;
    var sort = query.sort;

    // Get filter
    var filter = query.filter;

    // Get fields
    var fields = query.fields;

    // Get path name
    var pathname = url_parts.pathname;

    // Check if path name is '/comments'
    if (pathname === '/comments') {
        // Create array of comments
        var comments = [
            {id: 1, author: 'John', comment: 'Hello!'},
            {id: 2, author: 'Mary', comment: 'Hi!'},
            {id: 3, author: 'Peter', comment: 'Good morning!'},
            {id: 4, author: 'Jane', comment: 'Good afternoon!'},
            {id: 5, author: 'Paul', comment: 'Good evening!'},
            {id: 6, author: 'Anna', comment: 'Good night!'},
            {id: 7, author: 'Albert', comment: 'Good bye!'},
            {id: 8, author: 'Eve', comment: 'Good luck!'}
        ];

        // Check if limit is defined
        if (limit !== undefined) {
            // Convert limit to integer
            limit = parseInt(limit);

            // Check if limit is integer
            if (isNaN