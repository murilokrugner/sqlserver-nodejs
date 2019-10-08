/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CVX010', {
    CVX_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVX_CONFIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVX_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVX_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                        '
    },
    CVX_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CVX_SLDCRD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CVX_SLDDEB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CVX_NIV01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CVX_NIV02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CVX_NIV03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CVX_NIV04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CVX_NIV05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CVX_NIV06: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CVX_TPSALD: {
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
    }
  }, {
    tableName: 'CVX010'
  });
};
