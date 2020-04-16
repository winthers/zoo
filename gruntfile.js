module.exports = function (grunt) {
  const fs = require("fs");


  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    // ------------------------------------------
    concat: {
      options: {
        separator: ";\n"
      },
      
      app: {
        src: [
          // "./node_modules/babel-polyfill/dist/polyfill.min.js",
          "src/zoo.js",
          "src/zoo.*.js"

        ],
        dest: "dist/zoo.js"
      }
      
    },
    // ------------------------------------------
    babel: {
      options: {
        sourceMap: true,
        presets: ['@babel/preset-env'],
      },
      prod: {
        files: {
          'dist/zoo.js': 'dist/concat.js',
        }
      }
    },

    clean: ["dist/**"]
    


  });

  // includes
 
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-clean");
  





  grunt.registerTask("build", ["clean", "concat:app", "add-version"])
  grunt.registerTask("default", ["build"]);

  grunt.registerTask("add-version", ()=> {
    let file = fs.readFileSync("./dist/zoo.js", "utf8");
    file +=`\nzoo.version="${grunt.config("pkg").version}";\n`;
    fs.writeFileSync("./dist/zoo.js", file, "utf8");
  })


};
