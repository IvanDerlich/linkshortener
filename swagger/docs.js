const urlShortenerSwaggerDoc = {
  "/": {
    post: {
      tags: ["URL Shortening"],
      summary: "Create a shortened URL",
      description:
        "This endpoint accepts an original URL and returns a shortened version.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                originalUrl: {
                  type: "string",
                  example: "https://www.example.com",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Shortened URL successfully created",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  originalUrl: {
                    type: "string",
                    example: "https://www.example.com",
                  },
                  shortUrl: {
                    type: "string",
                    example: "http://shorten.ivanderlich.com/abc1234",
                  },
                },
              },
            },
          },
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
  "/{shortId}": {
    get: {
      tags: ["URL Shortening"],
      summary: "Redirect using the shortened URL",
      description:
        "This endpoint accepts a shortened URL and redirects to the original URL.",
      parameters: [
        {
          in: "path",
          name: "shortId",
          schema: {
            type: "string",
          },
          required: true,
          description: "The shortened ID of the URL",
        },
      ],
      responses: {
        200: {
          description: "Original URL returned",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  originalUrl: {
                    type: "string",
                    example: "https://www.example.com",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "Short URL not found",
        },
      },
    },
  },
};

module.exports = urlShortenerSwaggerDoc;
