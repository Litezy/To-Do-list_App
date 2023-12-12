export default function Button({ children, mode = 'filled', Icon, ...props}) {
    let cssClasses = `button ${mode}-button`;
   
    if (Icon) {
      cssClasses += ' icon-button';
    }
   
    if (props.className) {
      cssClasses += ' ' + props.className;
    }
   
    return (
      <button className={cssClasses} {...props}>
        {Icon && (
          <span className="button-icon">
            <Icon />
          </span>
        )}
        <span>{children}</span>
      </button>
    );
  }