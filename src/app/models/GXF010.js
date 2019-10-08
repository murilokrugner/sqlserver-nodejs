/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GXF010', {
    GXF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GXF_CODLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    GXF_SEQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GXF_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GXF_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GXF_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GXF_TPLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GXF_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GXF_UNINEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'GXF010'
  });
};
