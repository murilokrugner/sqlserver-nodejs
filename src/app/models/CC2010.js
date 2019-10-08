/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CC2010', {
    CC2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CC2_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CC2_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CC2_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
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
    },
    CC2_CDSIAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CC2_MDEDMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC2_MDEDSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC2_PERMAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CC2_PERSER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CC2_DTRECO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CC2_BASISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC2_CPOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC2_TPDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC2_CODANP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'CC2010'
  });
};
