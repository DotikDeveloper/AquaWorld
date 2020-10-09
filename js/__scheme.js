let scheme = (
    turbidity,
    chromaticity,
    smell,
    rigidity,
    iron,
    manganese,
    permanganate,
    hydrogen,
    // ph,
    // mineralization,
    ammonium,
    nitrates,
    // residents,
    // points,
    // peak,
    // name,
    // email,
    // tel
) => {
    if (
        turbidity == 1 &&
        chromaticity == 1 &&
        smell == 1 &&
        rigidity == 4 &&
        iron == 1 &&
        manganese == 1 &&
        permanganate == 1 &&
        hydrogen == 1 &&
        ammonium == 1 &&
        nitrates == 1
    ) {
        scheme = scheme1();
    } else if (
        turbidity == 1 &&
        chromaticity == 1 &&
        smell == 1 &&
        rigidity == 3 &&
        iron == 2 &&
        manganese == 2 &&
        permanganate == 1 &&
        hydrogen == 1 &&
        ammonium == 1 &&
        nitrates == 1
    ) {
        scheme = scheme2();
    } else if (
        turbidity == 2 &&
        chromaticity == 2 &&
        smell == 1 &&
        rigidity == 1 &&
        iron == 2 &&
        manganese == 2 &&
        permanganate == 1 &&
        hydrogen == 1 &&
        ammonium == 1 &&
        nitrates == 1
    ) {
        scheme = scheme3();
    } else if (
        turbidity == 2 &&
        chromaticity == 2 &&
        smell == 1 &&
        rigidity == 4 &&
        iron == 2 &&
        manganese == 2 &&
        permanganate == 1 &&
        hydrogen == 1 &&
        ammonium == 1 &&
        nitrates == 1
    ) {
        scheme = scheme4();
    } else if (
        turbidity == 2 &&
        chromaticity == 2 &&
        smell == 1 &&
        rigidity == 2 &&
        iron == 2 &&
        manganese == 2 &&
        permanganate == 2 &&
        hydrogen == 1 &&
        ammonium == 1 &&
        nitrates == 1
    ) {
        scheme = scheme5();
    } else if (
        turbidity == 2 &&
        chromaticity == 2 &&
        smell == 1 &&
        rigidity == 3 &&
        iron == 2 &&
        manganese == 2 &&
        permanganate == 1 &&
        hydrogen == 1 &&
        ammonium == 1 &&
        nitrates == 2
    ) {
        scheme = scheme6();
    } else if (
        turbidity == 2 &&
        chromaticity == 2 &&
        smell == 1 &&
        rigidity == 3 &&
        iron == 2 &&
        manganese == 2 &&
        permanganate == 2 &&
        hydrogen == 1 &&
        ammonium == 2 &&
        nitrates == 1
    ) {
        scheme = scheme7();
    } else if (
        turbidity == 2 &&
        chromaticity == 2 &&
        smell == 2 &&
        rigidity == 1 &&
        iron == 2 &&
        manganese == 2 &&
        permanganate == 1 &&
        hydrogen == 2 &&
        ammonium == 1 &&
        nitrates == 1
    ) {
        scheme = scheme8();
    } else if (
        turbidity == 2 &&
        chromaticity == 3 &&
        smell == 2 &&
        rigidity == 1 &&
        iron == 1 &&
        manganese == 1 &&
        permanganate == 1 &&
        hydrogen == 1 &&
        ammonium == 1 &&
        nitrates == 1
    ) {
        scheme = scheme9();
    } else if (
        turbidity == 2 &&
        chromaticity == 2 &&
        smell == 2 &&
        rigidity == 4 &&
        iron == 2 &&
        manganese == 2 &&
        permanganate == 1 &&
        hydrogen == 2 &&
        ammonium == 1 &&
        nitrates == 1
    ) {
        scheme = scheme10();
    } else {
        console.log('Закажите обратный звонок, в данных ошибка');
    }
};

const scheme1 = () => {
    console.log(
        'scheme1'
    );
};
const scheme2 = () => {
    console.log("scheme2");

};
const scheme3 = () => {
    console.log("scheme3");

};
const scheme4 = () => {
    console.log("scheme4");

};
const scheme5 = () => {
    console.log("scheme5");

};
const scheme6 = () => {
    console.log("scheme6");

};
const scheme7 = () => {
    console.log("scheme7");

};
const scheme8 = () => {
    console.log("scheme8");

};
const scheme9 = () => {
    console.log("scheme9");

};
const scheme10 = () => {
    console.log("scheme10");

};