/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GXH010', {
    GXH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GXH_NRIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    GXH_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GXH_EMISDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GXH_SERDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    GXH_NRDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    GXH_TPDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GXH_FILDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GXH_DANFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    GXH_CNPJEM: {
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
    tableName: 'GXH010'
  });
};
