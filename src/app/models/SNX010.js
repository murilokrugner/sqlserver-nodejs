/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SNX010', {
    NX_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NX_IDMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NX_DTMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NX_CODRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    NX_REVISAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NX_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NX_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NX_VLRBASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NX_VLRMOV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NX_TPDEPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NX_TPSALDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NX_NIV01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NX_NIV02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NX_NIV03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NX_NIV04: {
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
    },
    NX_LA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NX_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NX_LP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NX_DCONTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'SNX010'
  });
};
