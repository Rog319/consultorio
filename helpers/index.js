export const formulaOMS = (peso, altura, genero, edad, facActividad) => {
  switch (genero) {
    case 'Masculino':
      if (edad < 18) {
        return 11.3 * peso + 16 * altura + 901;
      }
      switch (facActividad) {
        case 'Sedentario':
          return (11.3 * peso + 16 * altura + 901) * 1.2;
        case 'Ligero':
          return (11.3 * peso + 16 * altura + 901) * 1.3;
        case 'Moderado':
          return (11.3 * peso + 16 * altura + 901) * 1.5;
        case 'Activo':
          return (11.3 * peso + 16 * altura + 901) * 1.7;
        case 'Vigoroso':
          return (11.3 * peso + 16 * altura + 901) * 1.9;
      }
    case 'Femenino':
      if (edad < 18) {
        return 8.7 * peso - 25 * altura + 865;
      }
      switch (facActividad) {
        case 'Sedentario':
          return (8.7 * peso - 25 * altura + 865) * 1.2;
        case 'Ligero':
          return (8.7 * peso - 25 * altura + 865) * 1.3;
        case 'Moderado':
          return (8.7 * peso - 25 * altura + 865) * 1.5;
        case 'Activo':
          return (8.7 * peso - 25 * altura + 865) * 1.7;
        case 'Vigoroso':
          return (8.7 * peso - 25 * altura + 865) * 1.9;
      }
  }
};

export const mostrarResultadoOms = (value) => {
  if (value === 0) {
    return '';
  }
  return (
    'Tu gasto energetico total segun la formula "OMS" es de:   ' +
    value.toPrecision(6)
  );
};

export const formulaHarris = (peso, altura, genero, edad, facActividad) => {
  switch (genero) {
    case 'Masculino':
      if (edad < 18) {
        return (
          66.5 +
          13.75 * peso +
          5 * (altura * 100) -
          6.78 * edad +
          (66.5 + 13.75 * peso + 5 * (altura * 100) - 6.78 * edad) * 0.1
        );
      }
      switch (facActividad) {
        case 'Sedentario':
          return (
            (66.5 + 13.75 * peso + 5 * (altura * 100) - 6.78 * edad) * 1.2 +
            (66.5 + 13.75 * peso + 5 * (altura * 100) - 6.78 * edad) * 0.1
          );
        case 'Ligero':
          return (
            (66.5 + 13.75 * peso + 5 * (altura * 100) - 6.78 * edad) * 1.3 +
            (66.5 + 13.75 * peso + 5 * (altura * 100) - 6.78 * edad) * 0.1
          );
        case 'Moderado':
          return (
            (66.5 + 13.75 * peso + 5 * (altura * 100) - 6.78 * edad) * 1.5 +
            (66.5 + 13.75 * peso + 5 * (altura * 100) - 6.78 * edad) * 0.1
          );
        case 'Activo':
          return (
            (66.5 + 13.75 * peso + 5 * (altura * 100) - 6.78 * edad) * 1.7 +
            (66.5 + 13.75 * peso + 5 * (altura * 100) - 6.78 * edad) * 0.1
          );
        case 'Vigoroso':
          return (
            (66.5 + 13.75 * peso + 5 * (altura * 100) - 6.78 * edad) * 1.9 +
            (66.5 + 13.75 * peso + 5 * (altura * 100) - 6.78 * edad) * 0.1
          );
      }
    case 'Femenino':
      if (edad < 18) {
        return (
          655.1 +
          9.56 * peso +
          1.85 * (altura * 100) -
          4.68 * edad +
          (655.1 + 9.56 * peso + 1.85 * (altura * 100) - 4.68 * edad) * 0.1
        );
      }
      switch (facActividad) {
        case 'Sedentario':
          return (
            (655.1 + 9.56 * peso + 1.85 * (altura * 100) - 4.68 * edad) * 1.2 +
            (655.1 + 9.56 * peso + 1.85 * (altura * 100) - 4.68 * edad) * 0.1
          );
        case 'Ligero':
          return (
            (655.1 + 9.56 * peso + 1.85 * (altura * 100) - 4.68 * edad) * 1.3 +
            (655.1 + 9.56 * peso + 1.85 * (altura * 100) - 4.68 * edad) * 0.1
          );
        case 'Moderado':
          return (
            (655.1 + 9.56 * peso + 1.85 * (altura * 100) - 4.68 * edad) * 1.5 +
            (655.1 + 9.56 * peso + 1.85 * (altura * 100) - 4.68 * edad) * 0.1
          );
        case 'Activo':
          return (
            (655.1 + 9.56 * peso + 1.85 * (altura * 100) - 4.68 * edad) * 1.7 +
            (655.1 + 9.56 * peso + 1.85 * (altura * 100) - 4.68 * edad) * 0.1
          );
        case 'Vigoroso':
          return (
            (655.1 + 9.56 * peso + 1.85 * (altura * 100) - 4.68 * edad) * 1.9 +
            (655.1 + 9.56 * peso + 1.85 * (altura * 100) - 4.68 * edad) * 0.1
          );
      }
  }
};

export const mostrarResultadoHarris = (value) => {
  if (value === 0) {
    return '';
  }
  return (
    'Tu gasto energetico total segun la formula "Harris-Benedict" es de:   ' +
    value.toPrecision(6)
  );
};

export const formulaOwen = (peso, genero, edad, facActividad) => {
  switch (genero) {
    case 'Masculino':
      if (edad < 18) {
        return 879 + 10.2 * peso;
      }
      switch (facActividad) {
        case 'Sedentario':
          return (879 + 10.2 * peso) * 1.2;
        case 'Ligero':
          return (879 + 10.2 * peso) * 1.3;
        case 'Moderado':
          return (879 + 10.2 * peso) * 1.5;
        case 'Activo':
          return (879 + 10.2 * peso) * 1.7;
        case 'Vigoroso':
          return (879 + 10.2 * peso) * 1.9;
      }
    case 'Femenino':
      if (edad < 18) {
        return 795 + 7.18 * peso;
      }
      switch (facActividad) {
        case 'Sedentario':
          return (795 + 7.18 * peso) * 1.2;
        case 'Ligero':
          return (795 + 7.18 * peso) * 1.3;
        case 'Moderado':
          return (795 + 7.18 * peso) * 1.5;
        case 'Activo':
          return (795 + 7.18 * peso) * 1.7;
        case 'Vigoroso':
          return (795 + 7.18 * peso) * 1.9;
      }
  }
};

export const mostrarResultadoOwen = (value) => {
  if (value === 0) {
    return '';
  }
  return (
    'Tu gasto energetico total segun la formula "Owen" es de:   ' +
    value.toPrecision(6)
  );
};

export const formulaValencia = (peso, genero, edad, facActividad) => {
  switch (genero) {
    case 'Masculino':
      if (edad >= 18 && edad <= 29) {
        switch (facActividad) {
          case 'Sedentario':
            return (13.37 * peso + 747) * 1.2;
          case 'Ligero':
            return (13.37 * peso + 747) * 1.3;
          case 'Moderado':
            return (13.37 * peso + 747) * 1.5;
          case 'Activo':
            return (13.37 * peso + 747) * 1.7;
          case 'Vigoroso':
            return (13.37 * peso + 747) * 1.9;
        }
      }
      if (edad >= 30 && edad <= 59) {
        switch (facActividad) {
          case 'Sedentario':
            return (13.08 * peso + 693) * 1.2;
          case 'Ligero':
            return (13.08 * peso + 693) * 1.3;
          case 'Moderado':
            return (13.08 * peso + 693) * 1.5;
          case 'Activo':
            return (13.08 * peso + 693) * 1.7;
          case 'Vigoroso':
            return (13.08 * peso + 693) * 1.9;
        }
      }
      if (edad >= 60) {
        switch (facActividad) {
          case 'Sedentario':
            return (14.21 * peso + 429) * 1.2;
          case 'Ligero':
            return (14.21 * peso + 429) * 1.3;
          case 'Moderado':
            return (14.21 * peso + 429) * 1.5;
          case 'Activo':
            return (14.21 * peso + 429) * 1.7;
          case 'Vigoroso':
            return (14.21 * peso + 429) * 1.9;
        }
      }
    case 'Femenino':
      if (edad >= 18 && edad <= 29) {
        switch (facActividad) {
          case 'Sedentario':
            return (11.02 * peso + 679) * 1.2;
          case 'Ligero':
            return (11.02 * peso + 679) * 1.3;
          case 'Moderado':
            return (11.02 * peso + 679) * 1.5;
          case 'Activo':
            return (11.02 * peso + 679) * 1.7;
          case 'Vigoroso':
            return (11.02 * peso + 679) * 1.9;
        }
      }
      if (edad >= 30 && edad <= 59) {
        switch (facActividad) {
          case 'Sedentario':
            return (10.92 * peso + 677) * 1.2;
          case 'Ligero':
            return (10.92 * peso + 677) * 1.3;
          case 'Moderado':
            return (10.92 * peso + 677) * 1.5;
          case 'Activo':
            return (10.92 * peso + 677) * 1.7;
          case 'Vigoroso':
            return (10.92 * peso + 677) * 1.9;
        }
      }
      if (edad >= 60) {
        switch (facActividad) {
          case 'Sedentario':
            return (10.98 * peso + 520) * 1.2;
          case 'Ligero':
            return (10.98 * peso + 520) * 1.3;
          case 'Moderado':
            return (10.98 * peso + 520) * 1.5;
          case 'Activo':
            return (10.98 * peso + 520) * 1.7;
          case 'Vigoroso':
            return (10.98 * peso + 520) * 1.9;
        }
      }
  }
};

export const mostrarResultadoValencia = (value) => {
  if (value === 0) {
    return '';
  }
  return (
    'Tu gasto energetico total segun la formula "Valencia" es de:   ' +
    value.toPrecision(6)
  );
};

export const formulaMifflin = (peso, altura, genero, edad, facActividad) => {
  switch (genero) {
    case 'Masculino':
      if (edad < 18) {
        return 10 * peso + 6.25 * (altura * 100) - 5 * edad + 5;
      }
      switch (facActividad) {
        case 'Sedentario':
          return (10 * peso + 6.25 * (altura * 100) - 5 * edad + 5) * 1.2;
        case 'Ligero':
          return (10 * peso + 6.25 * (altura * 100) - 5 * edad + 5) * 1.3;
        case 'Moderado':
          return (10 * peso + 6.25 * (altura * 100) - 5 * edad + 5) * 1.5;
        case 'Activo':
          return (10 * peso + 6.25 * (altura * 100) - 5 * edad + 5) * 1.7;
        case 'Vigoroso':
          return (10 * peso + 6.25 * (altura * 100) - 5 * edad + 5) * 1.9;
      }
    case 'Femenino':
      if (edad < 18) {
        return 10 * peso + 6.25 * (altura * 100) - 5 * edad - 161;
      }
      switch (facActividad) {
        case 'Sedentario':
          return (10 * peso + 6.25 * (altura * 100) - 5 * edad - 161) * 1.2;
        case 'Ligero':
          return (10 * peso + 6.25 * (altura * 100) - 5 * edad - 161) * 1.3;
        case 'Moderado':
          return (10 * peso + 6.25 * (altura * 100) - 5 * edad - 161) * 1.5;
        case 'Activo':
          return (10 * peso + 6.25 * (altura * 100) - 5 * edad - 161) * 1.7;
        case 'Vigoroso':
          return (10 * peso + 6.25 * (altura * 100) - 5 * edad - 161) * 1.9;
      }
  }
};

export const mostrarResultadoMifflin = (value) => {
  if (value === 0) {
    return '';
  }
  return (
    'Tu gasto energetico total segun la formula "Mifflin St-Jeor" es de:   ' +
    value.toPrecision(6)
  );
};

export const mostrarResultado = (value) => {
  if (value === 0) {
    return '';
  }
  return 'Tu gasto energetico total es:   ' + value.toPrecision(6);
};
