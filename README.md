# Getting Started with Styled-components
[https://styled-components.com/docs/basics]

[https://medium.com/building-crowdriff/styled-components-to-use-or-not-to-use-a6bb4a7ffc21]


## Motivation

* Automatic critical CSS: styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. Combined with code splitting, this means your users load the least amount of code necessary.

* No class name bugs: styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.

* Dynamic styling: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.

* Simple maintenance: you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.

* Automatic vendor prefixing: write your CSS to the current standard and let styled-components handle the rest.


## Tips

* Define Styled Components outside of the render method -
Otherwise, it will be recreated on every single render pass.


* The ThemeProvider - is used as a wrapper that injects theme props into all of its child components

* The CSS Function - With Styled Components’ css function, you can use props to conditionally render css, which meant that we no longer had to render conditional class names based on props. This reduces clutter in your components as well as maintains a separation of concerns between CSS and JavaScript.

### Example usage of css func:

#### No css func
```
import styled from 'styled-components';
const Button = styled.button`
  color: ${props => props.isSecondary ? 'blue' : 'white'};
`
```
#### With css func
```
const Button = styled.button`
  color: 'white';
  ${props => props.isSecondary && css`
        color: 'blue';
  `}
`
// Using the isSecondary iteration of the styled component
  <Button isSecondary />
```

* Testing - [https://github.com/styled-components/jest-styled-components]

Testing styled components painless by creating consistent class names and allowing you to assert specific CSS rules

Below is an example of an assertion that Jest SC:

```
expect(button).toHaveStyleRule('color', 'blue');
```

#### Pseudoelements, pseudoselectors, and nesting
* The preprocessor stylis, supports scss-like syntax for automatically nesting styles.

* The ampersand (&) can be used to refer back to the main component. Here are some more examples of its potential usage:

```
&:hover {
    color: red; // hover on the element
}

& ~ & {
    background: tomato; //  sibling, but maybe not directly next to it
}

& + & {
    background: lime; // sibling next to the element
}

&.something {
    background: orange; // element tagged with an additional CSS class ".something"
}

.something-else & {
    border: 1px solid; // element inside another element labeled ".something-else"
}
```
* Note: If you put selectors in without the ampersand, they will refer to children of the component.

The ampersand can be used to increase the specificity of rules on the component; this can be useful if you are dealing with a mixed styled-components and vanilla CSS environment:

```
const Thing = styled.div`
  && {
    color: blue;
  }
`

const GlobalStyle = createGlobalStyle`
  div${Thing} {
    color: red;
  }
`

render(
  <React.Fragment>
    <GlobalStyle />
    <Thing>
      I'm blue, da ba dee da ba daa
    </Thing>
  </React.Fragment>
)
```

#### Attaching additional props

To avoid unnecessary wrappers that just pass on some props to the rendered component, or element, you can use the .attrs constructor. It allows you to attach additional props (or "attributes") to a component.

```
const Input = styled.input.attrs(props => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

render(
  <div>
    <Input placeholder="A small text input" />
    <br />
    <Input placeholder="A bigger text input" size="2em" />
  </div>
);
```


##### Overriding .attr

```
const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;

render(
  <div>
    <Input placeholder="A bigger text input" size="2em" />
    <br />
    {/* Notice we can still use the size attr from Input */}
    <PasswordInput placeholder="A bigger password input" size="2em" />
  </div>
);
```

