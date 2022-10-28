export type Styles = {
  container: string;
  divider: string;
  infoContainer: string;
  innerContainer: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
