export const common = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  headline: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
    width: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 0.5,
    padding: 10,
    backgroundColor: '#BADA55',
  },
};

export const roster = {
  container: Object.assign({}, common.container, {
    flexDirection: 'row',
  }),
  roommate: {
    flex: 0.5,
    padding: 10,
    backgroundColor: '#BADA55',
  },
  name: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  duty: {
    textAlign: 'center',
    color: '#333333',
    paddingBottom: 10,
  },
};
