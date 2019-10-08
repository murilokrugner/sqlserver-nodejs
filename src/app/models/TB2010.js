/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB2010', {
    TB2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TB2_CODDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TB2_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TB2_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TB2_CODTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TB2_CODLOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TB2_DESLOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TB2_CODALM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TB2_GRAUS1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TB2_MINUT1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TB2_GRAUS2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TB2_MINUT2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TB2_QUANTI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TB2_UNIMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TB2_TOLERA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    TB2_TPRECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TB2_SEGUN1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TB2_SEGUN2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TB2_TPLATI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TB2_TPLONG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TB2010'
  });
};
