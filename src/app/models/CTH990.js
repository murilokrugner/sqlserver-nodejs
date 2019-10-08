/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTH990', {
    CTH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTH_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTH_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTH_NORMAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTH_DESC01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTH_DESC02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTH_DESC03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTH_DESC04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTH_DESC05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTH_BLOQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTH_DTBLIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTH_DTBLFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTH_DTEXIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTH_DTEXSF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTH_CLVLLP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTH_CLPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTH_BOOK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTH_CLSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTH_RES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CTH_CRGNV1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CTH_CRGNV2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CTH_CRGNV3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CTH_CLVM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTH_CLRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTH_ACATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTH_ATOBRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTH_ACAT01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTH_AT01OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTH_ACAT02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTH_AT02OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTH_ACAT03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTH_AT03OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTH_ACAT04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTH_AT04OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTH_TPO04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTH_TPO02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTH_TPO01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTH_TPO03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    }
  }, {
    tableName: 'CTH990'
  });
};
