import{b as u}from"/alienx/build/_shared/chunk-2NH4LW52.js";function r(e){for(var T={},O=e.split(" "),E=0;E<O.length;++E)T[O[E]]=!0;return T}function L(e,T,O){return T.tokenize=O,O(e,T)}function C(e,T){for(var O=!1,E;E=e.next();){if(E=="/"&&O){T.tokenize=A;break}O=E=="*"}return"comment"}function G(e){return function(T,O){for(var E=!1,N,R=!1;(N=T.next())!=null;){if(N==e&&!E){R=!0;break}E=!E&&N=="\\"}return(R||!E)&&(O.tokenize=A),"error"}}function A(e,T){var O=e.next();return O=='"'||O=="'"?L(e,T,G(O)):/[\[\]{}\(\),;\.]/.test(O)?null:/\d/.test(O)?(e.eatWhile(/[\w\.]/),"number"):O=="/"?e.eat("*")?L(e,T,C):(e.eatWhile(I),"operator"):O=="-"?e.eat("-")?(e.skipToEnd(),"comment"):(e.eatWhile(I),"operator"):I.test(O)?(e.eatWhile(I),"operator"):(e.eatWhile(/[\w\$_]/),n&&n.propertyIsEnumerable(e.current().toUpperCase())&&!e.eat(")")&&!e.eat(".")?"keyword":S&&S.propertyIsEnumerable(e.current().toUpperCase())?"builtin":t&&t.propertyIsEnumerable(e.current().toUpperCase())?"type":"variable")}var i,U,o,S,n,t,I,D,M=u(()=>{i="ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER ",U="VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE NEQ MATCHES TRUE FALSE DUMP",o="BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP ",S=r(i),n=r(U),t=r(o),I=/[*+\-%<>=&?:\/!|]/;D={name:"pig",startState:function(){return{tokenize:A,startOfLine:!0}},token:function(e,T){if(e.eatSpace())return null;var O=T.tokenize(e,T);return O},languageData:{autocomplete:(i+o+U).split(" ")}}});M();export{D as pig};
