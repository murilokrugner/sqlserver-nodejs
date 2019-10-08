/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FKG010', {
    FKG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FKG_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FKG_IDDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FKG_IDFKE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FKG_TPIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FKG_DEDACR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FKG_APLICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FKG_CALCUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FKG_PERCEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FKG_TPATRB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FKG_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FKG_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FKG_NUMPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FKG_TPPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FKG_TITINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FKG_APURIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FKG_BASECA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FKG_CODSUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
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
    tableName: 'FKG010'
  });
};
