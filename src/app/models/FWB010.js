/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FWB010', {
    FWB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FWB_IDDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FWB_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FWB_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FWB_OCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FWB_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FWB_DTOCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FWB_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FWB_CODERR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FWB_DTSERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    tableName: 'FWB010'
  });
};
