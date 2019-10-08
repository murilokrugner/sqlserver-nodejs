/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AH4010', {
    AH4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH4_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AH4_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AH4_LOJAFO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH4_DTPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AH4_SALADI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH4_VALADI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH4_QTDADI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH4_QTDACU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH4_VALACU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH4_VALORD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH4_DESCIR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH4_DTULTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AH4_DATCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AH4_LICITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AH4_NOTITU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    AH4_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AH4_SEQCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH4_CODANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    }
  }, {
    tableName: 'AH4010'
  });
};
