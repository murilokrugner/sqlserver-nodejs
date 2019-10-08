/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTD010', {
    CTD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTD_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTD_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTD_NORMAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTD_DESC01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTD_DESC02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTD_DESC03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTD_DESC04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTD_DESC05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTD_BLOQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTD_DTBLIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTD_DTBLFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTD_DTEXIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTD_DTEXSF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTD_ITLP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTD_ITPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTD_BOOK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTD_ITSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTD_RES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CTD_CRGNV1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CTD_CRGNV2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CTD_RGNV3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CTD_CLOBRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTD_ACCLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTD_ITVM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTD_ITRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTD_ACATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTD_ATOBRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTD_ACAT01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTD_AT01OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTD_ACAT02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTD_AT02OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTD_ACAT03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTD_AT03OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTD_ACAT04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTD_AT04OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTD_TPO01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTD_TPO04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTD_TPO02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTD_TPO03: {
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
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'CTD010'
  });
};
