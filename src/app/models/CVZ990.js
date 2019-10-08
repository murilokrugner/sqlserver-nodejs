/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CVZ990', {
    CVZ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVZ_CONFIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVZ_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVZ_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                        '
    },
    CVZ_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CVZ_SLDCRD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CVZ_SLDDEB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CVZ_NIV01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CVZ_NIV02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CVZ_NIV03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CVZ_NIV04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CVZ_NIV05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CVZ_NIV06: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CVZ_TPSALD: {
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
    tableName: 'CVZ990'
  });
};
