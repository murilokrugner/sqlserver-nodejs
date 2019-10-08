/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DY4010', {
    DY4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DY4_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DY4_LOTNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DY4_NUMNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DY4_SERNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DY4_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DY4_QTDVOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DY4_CLIREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DY4_LOJREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DY4_FILDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DY4_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DY4_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DY4_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DY4_SDOCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DY4_FILOCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DY4_NUMOCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DY4_FILVIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DY4_VIAGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DY4_SEQOCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
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
    tableName: 'DY4010'
  });
};
