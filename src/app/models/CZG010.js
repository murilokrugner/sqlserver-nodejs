/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CZG010', {
    CZG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CZG_CDAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CZG_CDRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CZG_CDFATD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CZG_CDMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CZG_VRFH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CZG_CDAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CZG_SQAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CZG_TPAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CZG_VLFG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CZG_VLCHAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    CZG_VLNR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CZG_VLDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CZG_VLLST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CZG_VLFX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CZG_VLFO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    CZG_VLMEMO: {
      type: "IMAGE",
      allowNull: true
    },
    CZG_VLTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CZG_DTFH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CZG_AFINF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CZG_AFSUP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CZG_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
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
    tableName: 'CZG010'
  });
};
