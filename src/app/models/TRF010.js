/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TRF010', {
    TRF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TRF_NUMENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRF_DTENVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRF_HRENVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TRF_QTDENV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TRF_QTDREC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TRF_DTREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRF_HRREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TRF_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    tableName: 'TRF010'
  });
};
