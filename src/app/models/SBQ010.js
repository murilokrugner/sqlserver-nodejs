/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SBQ010', {
    BQ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BQ_BASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                          '
    },
    BQ_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BQ_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BQ_CARACT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    BQ_TAMANHO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQ_MASCARA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    BQ_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    BQ_PRISEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQ_TIPDEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQ_CONJUNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BQ_INTDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQ_INTATE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQ_INTSTEP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQ_INICIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQ_DEPENDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BQ_TPGRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    tableName: 'SBQ010'
  });
};
