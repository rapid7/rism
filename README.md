# rism

rism is a convenient way to style React components. It has a pre-built library of styles to choose from (that are easily extended or modified), and also serves as storage for component-specific styles that you create. It is responsive, and includes state-based styling for elements.

### Table of Contents
* [Browser support](#browser-support)
* [Basic usage](#basic-usage)
* [Extending default styles] (#extending-default-styles)
* [Component-specific styles](#component-specific-styles)
* [Combine styles](#combine-styles)
* [Dynamic styles](#dynamic-styles)
* [Responsive styles](#responsive-styles)
* [Creating stylesheets](#creating-stylesheets)
* [Prefixes](#prefixes)
* [TODOS](#todos)

### Browser support

We support current version - 2 for all popular browsers, which translates to the following:
* IE10+
* Chrome
* Firefox
* Safari
* Opera

The methods and a vast majority of the styles will still work just fine in IE9, however there are no polyfills so certain properties (such as flexbox) will not work in those environments. If you are unsure whether or not a property is supported, consult the wonderful resource [caniuse](http://caniuse.com/).

### Basic usage

If you just want to use the styles available in rism, just bring it into your project and start using the properties!

```
var rism = require("rism");

...
<div style={rism.containerFixed}>
    <h3 style={rism.h3}>
      Responsive containers
    </h3>
    
    <p style={rism.p}>
      I am a container that will be a fixed width, that will responsively
      change based on overall screen size.
    </p>
</div>
```

### Extending default styles

You can also build upon the existing library object by using the *extend* method in the *componentWillMount* function.

```
componentWillMount:function() {
  rism.extend({
    container:{
      backgroundColor:"#ccc"
    },
    ginormousText:{
      fontSize:50
    }
  });
}
```

With that same interface you can also create new properties that don't already exist, hence the *ginormousText* property.

### Component-specific styles

You can also create component-specific styles that will not pollute the default styles. This is a convenient way to separate your styles by concerns. First, give your component a *displayName* when you create the class:
```
React.createClass({
    displayName:"Foo",
    ...
});
```
This is required so that rism can identify the component on minification. Then, in your *componentWillMount* function, you can add as many styles to the component as you would like:

```
componentWillMount:function() {
  rism.styles(this,{
    image:rism.combine(rism.imgResponsive,{
      borderRadius:4
    }),
    greenBackground:{
      backgroundColor:"green"
    }
  });
}
```

Notice that you pass *this* as the first parameter, and the styles object as the second, which associates the styles with this particular component. Then you can retrieve them for use later:

```
render:function() {
  var styles = rism.styles(this);
  
  return (
    <div style={styles.greenBackground}>
      <img src="some-kitty.png" alt="Cats are cool" style={styles.img} />
    </div>
  );
}
```

### Combine styles

Another thing to note from above is that you can combine styles to create a new one with the *combine* method. This accepts as many parameters as you'd like. This is especially useful with render-specific styles.

```
render:function() {
  var styles = rism.styles(this),
      renderStyles = {
        container:rism.combine(rism.container,rism.textBig,rism.textItalic,{
          backgroundColor:"red"
        });
      };
      
  return (
    <div style={renderStyles.container}>
      Now I am responsive, plus a legitimate requirement!
    </div>
  );
}
```

### Dynamic styles

Static styles are cool, but what if you want dynamic styles? rism has you covered for:
* active (equivalent to :active)
* after (equivalent to ::after)
* before (equivalent to ::before)
* disabled (equivalent to [disabled])
* focus (equivalent to :focus)
* hover (equivalent to :hover)
* readonly equivalent to [readonly])

First, you need to create a rism element with the *element* method:

```
var Button = rism.element(<button/>);
```

And then you just pass in the object of states to the element (all other standard properties for that element work just the same):

```
var buttonStates = {
      hover:rism.buttonPrimaryHover
    };

render:function() {
  return (
    <div style={rism.containerFlex}>
      <Button
        className="my-special-button"
        states={buttonStates}
        style={rism.buttonPrimary}
        type="button">
        I haz de hover
      </Button>
    </div>
  );
}
```

There is also a convenience function if you wanted to store these states just like your component styles.

```
componentWillMount:function() {
  rism
    .styles(this,{
      button:rism.combine(rism.buttonPrimary,{
        fontSize:50
      })
    })
    // chained because the first style needs to be created first
    .styles(this,{
      buttonHover:rism.combine(rism.styles(this).button,{
        transform:"scale(1.2)"
      });
    })
    .states(this,{
      button:{
        hover:rism.styles(this).buttonHover
      }
    });
}
...
render:function() {
  var styles = rism.styles(this),
      states = rism.states(this);
  
  return (
    <div style={rism.containerFlex}>
      <Button
        className="my-special-button"
        states={states.button}
        style={styles.button}
        type="button">
        Click me!
      </Button>
    </div>
  );
}
```

### Responsive styles

rism has support for responsive styles, with default breakpoints at:
* 568px
* 768px
* 992px
* 1200px

You can add to these breakpoints by using the *extend* method in the same way, just adding the media query:

```
rism.extend({
    "@media (min-width:768px)":{
        p:{
            margin:"2em"
        }
    ]
});
```

And rism will automatically pick that up, so that whenever the screen is larger than 768 you will have 2em spacing on p elements. You can also do the same thing for your component-specific styles:

```
rism.styles(this,{
    "@media (min-width:992px)":{
        p:{
            backgroundColor:"red"
        }
    }
});
```
You don't just need to use the existing sizes, though, you can use whatever breakpoint you want.

```
rism.extend({
    "@media (max-width:1000px)":{
        p:{
            textAlign:"center"
        }
    }
});
```

If you really want to switch things up and use your own custom breakpoints instead of the defaults provided, you can override them with the *sizes* method.

```
rism.sizes({
    s:"@media (max-width:799px)",
    m:"@media (min-width:800px)",
    l:"@media (min-width:1024px)"
});
```

Keep in mind that this function overrides all responsive styling in rism, so you will need to create all responsive styles you want.

One last note ... you don't need to use pixels, you can use em if you want.

```
rism.sizes({
    s:"@media (max-width:49.938em)",
    m:"@media (min-width:50em)",
    l:"@media (min-width:64em)"
});
```

### Creating stylesheets

Just in case you want to create a stylesheet (like if you wanted to have styling on html, for example), you can use the *stylesheet* method to build it. You can either use a string:

```
var css = "html,body {min-height:100vh}";
...
componentWillMount:function() {
  rism.stylesheet(css);
}
```

Or you can build it with rism style objects:

```
componentWillMount:function() {
  rism.stylesheet({
    "html, body":{
      minHeight:"100vh"
    }
  });
}
```

Either way, your stylesheet will be generated and injected into the document's *head*. Additionally, you can use unitless declarations like you with React (for example, *{width:600}*) and the stylesheet creator will automatically apply the *px* to it when applicable.

### Prefixes

rism comes with a prefixer method that will handle all prefixes for the browsers we support.

```
console.log(rism.prefix({
  userSelect:"none"
}));

// {WebkitUserSelect:"none"}
```

This is useful if you are not storing styles or are doing render-specific styles. It also works with nested objects:
```
console.log(rism.prefix({
  buttonStates:{
    hover:{
      userSelect:"none"
    }
  }
}));

// {buttonStates:{hover:{WebkitUserSelect:"none"}}}
```

By default, all styles that you store by any method are autoprefixed, with the exception of stylesheets where you pass a string parameter (objects are prefixed).

### TODOS

* Sharpen up the responsive styling so that you can combine the default responsive size with custom styles in your component-specific styles
* Create github.io site that has full display of included styles
* Expand documentation for both styles and full API
* Bolster default styles with more stuff (any requests, please ask!)
