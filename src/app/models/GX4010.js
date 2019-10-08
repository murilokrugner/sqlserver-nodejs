/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GX4010', {
    GX4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GX4_NRMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GX4_CDPTCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    GX4_SIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GX4_CDENDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GX4_PRIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GX4_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GX4_HRENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GX4_USUENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    GX4_DTSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GX4_HRSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GX4_USUSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    GX4_QTPESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GX4_USUPES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    GX4_IDPEDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GX4_VLHODO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GX4_DTCHEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GX4_HRCHEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GX4_DTINCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GX4_HRINCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GX4_DTFICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GX4_HRFICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GX4_DTLIEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GX4_HRLIEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    GX4_DTSAEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GX4_HRSAEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GX4_QTDC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GX4_QTPEEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GX4_QTVEEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GX4_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    GX4_VLTARA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GX4_REPOBS: {
      type: "VARBINARY",
      allowNull: true
    },
    GX4_REPUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
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
    tableName: 'GX4010'
  });
};
