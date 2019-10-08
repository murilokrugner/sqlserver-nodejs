/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FK5010', {
    FK5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK5_IDMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FK5_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FK5_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FK5_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK5_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FK5_RECPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FK5_TPDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK5_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK5_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FK5_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FK5_AGENCI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    FK5_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FK5_NUMCH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    FK5_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    FK5_HISTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    FK5_VLMOE2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FK5_DTCONC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FK5_DTDISP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FK5_MODSPB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FK5_SEQCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FK5_TERCEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FK5_TPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FK5_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK5_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FK5_RATEIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FK5_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK5_PROTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FK5_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FK5_NUMBOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FK5_LA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FK5_TXMOED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FK5_ORDREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FK5_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FK5_IDDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
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
    tableName: 'FK5010'
  });
};
