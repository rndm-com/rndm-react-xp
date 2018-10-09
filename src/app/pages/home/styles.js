import { colors } from '../../styles';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white[1],
  },
  image: {
    margin: 20,
    width: 200,
    height: 200,
  },
  title: {
    color: colors.black[0],
    fontSize: 20,
  },
  subtitle: {
    color: colors.black[1],
    fontSize: 16,
    textAlign: 'left',
    marginTop: 10,
  },
  hyperlink: {
    color: colors.blue[1],
  },
  list: {
    justifyContent: 'flex-start',
    width: 300,
  },
};

export default styles;
