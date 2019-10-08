/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR7010', {
    TR7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TR7_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TR7_DTLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TR7_HRLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TR7_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TR7_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TR7_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TR7_ESPECI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TR7_DTRECI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TR7_HRRECI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TR7_NFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TR7_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TR7_NUMSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    TR7_REABRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TR7_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'TR7010'
  });
};
