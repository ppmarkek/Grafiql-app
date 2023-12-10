/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // transform: {
	// 	'^.+\\.tsx?$': 'ts-jest',
	// },
	// testRegex: 'src(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	// testPathIgnorePatterns: ['lib/', 'node_modules/'],
	// moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	// testEnvironment: 'node',
	// rootDir: 'src',
};
